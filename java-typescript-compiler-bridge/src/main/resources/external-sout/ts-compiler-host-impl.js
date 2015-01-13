var sys = require('./sys');
var ts = initServicesContext().ts;


var options;

function initOptions() {
    options = ts.getDefaultCompilerOptions();
}

var firstCreatedCompilerHost;
var program;
function compileFile(paths) {
    if (program != null) {
        return recompile(paths);
    }

    var createdHost = createCompilerHost(options);
    program = ts.createProgram(paths, options, createdHost);
    firstCreatedCompilerHost = createdHost;
    return processResult();
}

function processResult() {
    var typeChecker = program.getTypeChecker(true);
    var errors = program.getDiagnostics();
    var exitStatus;
    if (errors.length) {
        var checkStart = bindStart;
        var emitStart = bindStart;
        var reportStart = bindStart;
        exitStatus = 1 /* AllOutputGenerationSkipped */;
    }
    else {
        var checker = program.getTypeChecker(true);
        var checkStart = new Date().getTime();
        var semanticErrors = checker.getDiagnostics();
        var emitStart = new Date().getTime();
        var emitOutput = checker.emitFiles();
        var emitErrors = emitOutput.errors;
        exitStatus = emitOutput.emitResultStatus;
        var reportStart = new Date().getTime();
        errors = ts.concatenate(semanticErrors, emitErrors);
    }
    reportDiagnostics(errors);
}
function recompile(changedFiles) {
    function getCanonicalName(fileName) {
        return firstCreatedCompilerHost.getCanonicalFileName(fileName);
    }
    var oldSourceFiles = ts.arrayToMap(ts.filter(program.getSourceFiles(),
        function (file) { return !ts.hasProperty(changedFiles, getCanonicalName(file.filename)); }), function (file) { return getCanonicalName(file.filename); });
    var newCompilerHost = ts.clone(compilerHost);
    newCompilerHost.getSourceFile = function (fileName, languageVersion, onError) {
        fileName = getCanonicalName(fileName);
        var sourceFile = ts.lookUp(oldSourceFiles, fileName);
        if (sourceFile) {
            return sourceFile;
        }
        return firstCreatedCompilerHost.getSourceFile(fileName, languageVersion, onError);
    };

    program = ts.createProgram(changedFiles, options, newCompilerHost);
    return processResult();
}

function initServicesContext() {
    var fs = require('fs');
    var vm = require("vm");
    var pathToServicesFile = './external/typescriptServices.js';

    var fileData = fs.readFileSync(pathToServicesFile, 'utf8');
    var context = vm.createContext();
    vm.runInNewContext(fileData, context);

    if (!context.ts) throw new Error('ERROR_BRIDGE: Cannot find typescript service implementation in the file ' + pathToServicesFile);

    return context;
}


function createCompilerHost(charset) {
    var currentDirectory;
    var existingDirectories = {};
    function getCanonicalFileName(fileName) {
        return sys.useCaseSensitiveFileNames ? fileName : fileName.toLowerCase();
    }
    function getSourceFile(filename, languageVersion, onError) {
        try {
            var text = sys.readFile(filename, charset);
        }
        catch (e) {
            if (onError) {
                onError(e.message);
            }
            text = "";
        }
        return text !== undefined ? ts.createSourceFile(filename, text, languageVersion, "0") : undefined;
    }
    function writeFile(fileName, data, writeByteOrderMark, onError) {
        function directoryExists(directoryPath) {
            if (ts.hasProperty(existingDirectories, directoryPath)) {
                return true;
            }
            if (sys.directoryExists(directoryPath)) {
                existingDirectories[directoryPath] = true;
                return true;
            }
            return false;
        }
        function ensureDirectoriesExist(directoryPath) {
            if (directoryPath.length > ts.getRootLength(directoryPath) && !directoryExists(directoryPath)) {
                var parentDirectory = ts.getDirectoryPath(directoryPath);
                ensureDirectoriesExist(parentDirectory);
                sys.createDirectory(directoryPath);
            }
        }
        try {
            ensureDirectoriesExist(ts.getDirectoryPath(ts.normalizePath(fileName)));
            sys.writeFile(fileName, data, writeByteOrderMark);
        }
        catch (e) {
            if (onError)
                onError(e.message);
        }
    }
    return {
        getSourceFile: getSourceFile,
        getDefaultLibFilename: function () { return ts.combinePaths(ts.getDirectoryPath(ts.normalizePath(sys.getExecutingFilePath())), "lib.d.ts"); },
        writeFile: writeFile,
        getCurrentDirectory: function () { return currentDirectory || (currentDirectory = sys.getCurrentDirectory()); },
        useCaseSensitiveFileNames: function () { return sys.useCaseSensitiveFileNames; },
        getCanonicalFileName: getCanonicalFileName,
        getNewLine: function () { return sys.newLine; }
    };
}

function reportDiagnostic(diagnostic) {
    var output = "";
    if (diagnostic.file) {
        var loc = diagnostic.file.getLineAndCharacterFromPosition(diagnostic.start);
        output += diagnostic.file.filename + "(" + loc.line + "," + loc.character + "): ";
    }
    var category = ts.DiagnosticCategory[diagnostic.category].toLowerCase();
    output += category + " TS" + diagnostic.code + ": " + diagnostic.messageText + sys.newLine;
    sys.write(output);
}
function reportDiagnostics(diagnostics) {
    for (var i = 0; i < diagnostics.length; i++) {
        reportDiagnostic(diagnostics[i]);
    }
}

exports.createCompilerHost = createCompilerHost;
exports.compileFile = compileFile;
exports.initOptions = initOptions;