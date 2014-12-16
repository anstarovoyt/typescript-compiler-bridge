

var ts = require('./typeScriptServicesNode').ts;
var _fs = require("fs");
var _path = require("path");
var _os = require('os');
var comilerHostCreated;
var programCreated;

function compileFile(path) {
    var options = ts.getDefaultCompilerOptions();
    var arr = [];
    arr[0] = path;
    console.error("before create");
    var createdHost = createCompilerHost(options);
    console.error("creatd Host");
    var program = ts.createProgram(arr, options, createdHost);
    console.error("creatd program");
    var typeChecker = program.getTypeChecker(true);
    typeChecker.emitFiles();
    comilerHostCreated = createdHost;
    programCreated = program;
}

function recompileFile(path) {
    var options = ts.getDefaultCompilerOptions();
    var arr = [];
    arr[0] = getCanonicalFileName(path);
    var sources = {};
    sources[getCanonicalFileName(path)] = true;
    // Reuse source files from the last compilation so long as they weren't changed.
    function equalsExclude(file) {
        var result = !ts.hasProperty(sources, getCanonicalFileName(file.filename));
        //utils.log("check for exclude file " + file.filename + " check  " + result);
        return result;
    }
    var oldSourceFiles = ts.arrayToMap(ts.filter(programCreated.getSourceFiles(), function (file) { return equalsExclude(file); }),
        function (file) { return getCanonicalFileName(file.filename); });
    // We create a new compiler host for this compilation cycle.
    // This new host is effectively the same except that 'getSourceFile'
    // will try to reuse the SourceFiles from the last compilation cycle
    // so long as they were not modified.
    var newCompilerHost = ts.clone(comilerHostCreated);
    newCompilerHost.getSourceFile = function (fileName, languageVersion, onError) {
        fileName = getCanonicalFileName(fileName);
        var sourceFile = ts.lookUp(oldSourceFiles, fileName);
        if (sourceFile) {
            return sourceFile;
        }
        return comilerHostCreated.getSourceFile(fileName, languageVersion, onError);
    };
    var program = ts.createProgram(arr, options, newCompilerHost);
    var typeChecker = program.getTypeChecker(true);
    typeChecker.emitFiles();
    programCreated = program;
}

function getCanonicalFileName(fileName) {
    // if underlying system can distinguish between two files whose names differs only in cases then file name already in canonical form.
    // otherwise use toLowerCase as a canonical form.
    return fileName.toLowerCase();
}

function createCompilerHost(options) {
    var currentDirectory;
    var existingDirectories = {};

    function getSourceFile(filename, languageVersion, onError) {
        try {
            var text = readFile(filename, options.charset);
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
        console.error('write file ' +fileName);
        function directoryExists(directoryPath) {
            if (ts.hasProperty(existingDirectories, directoryPath)) {
                return true;
            }
            if (directoryExists(directoryPath)) {
                existingDirectories[directoryPath] = true;
                return true;
            }
            return false;
        }
        function ensureDirectoriesExist(directoryPath) {
            if (directoryPath.length > ts.getRootLength(directoryPath) && !directoryExists(directoryPath)) {
                var parentDirectory = ts.getDirectoryPath(directoryPath);
                ensureDirectoriesExist(parentDirectory);
                createDirectory(directoryPath);
            }
        }
        try {
            //ensureDirectoriesExist(ts.getDirectoryPath(ts.normalizePath(fileName)));
            writeFileFS(fileName, data, writeByteOrderMark);
        }
        catch (e) {
            if (onError)
                onError(e.message);
        }
    }
    return {
        getSourceFile: getSourceFile,
        getDefaultLibFilename: function () { return ts.combinePaths(process.cwd(), "lib.d.ts"); },
        writeFile: writeFile,
        getCurrentDirectory: function () { return currentDirectory || (currentDirectory = process.cwd()); },
        useCaseSensitiveFileNames: function () { return false; },
        getCanonicalFileName: getCanonicalFileName,
        getNewLine: function () { return '\n'; }
    };
}

var directoryExists = function (path) {
    return _fs.existsSync(path) && _fs.statSync(path).isDirectory();
}
var createDirectory = function (directoryName) {
    if (!this.directoryExists(directoryName)) {
        _fs.mkdirSync(directoryName);
    }
}

function readFile(fileName, encoding) {
    console.error('read ' + fileName);
    if (!_fs.existsSync(fileName)) {
        return undefined;
    }
    var buffer = _fs.readFileSync(fileName);
    var len = buffer.length;
    if (len >= 2 && buffer[0] === 0xFE && buffer[1] === 0xFF) {
        // Big endian UTF-16 byte order mark detected. Since big endian is not supported by node.js,
        // flip all byte pairs and treat as little endian.
        len &= ~1;
        for (var i = 0; i < len; i += 2) {
            var temp = buffer[i];
            buffer[i] = buffer[i + 1];
            buffer[i + 1] = temp;
        }
        return buffer.toString("utf16le", 2);
    }
    if (len >= 2 && buffer[0] === 0xFF && buffer[1] === 0xFE) {
        // Little endian UTF-16 byte order mark detected
        return buffer.toString("utf16le", 2);
    }
    if (len >= 3 && buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF) {
        // UTF-8 byte order mark detected
        return buffer.toString("utf8", 3);
    }
    // Default is UTF-8 with no byte order mark
    return buffer.toString("utf8");
}
function writeFileFS(fileName, data, writeByteOrderMark) {
    // If a BOM is required, emit one
    if (writeByteOrderMark) {
        data = '\uFEFF' + data;
    }

    console.error('sync write');
    _fs.writeFileSync(fileName, data, "utf8");
}

module.exports.compileFile = compileFile;
module.exports.recompileFile = recompileFile;