var ts;
var options;
var typeScriptServiceDirectory;
var typeScriptServicePath;
var sessionId;
var logDebugData = false;

function initCompiler(lPathToTypeScriptService, lSessionId) {
  typeScriptServicePath = lPathToTypeScriptService;
  ts = initServicesContext().ts;

  options = ts.getDefaultCompilerOptions();
  sessionId = lSessionId;

  typeScriptServiceDirectory = ts.getDirectoryPath(typeScriptServicePath);

  commandLine(ts);
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
  var errors = program.getDiagnostics();

  //todo use exit status
  var exitStatus;
  if (errors.length) {
    exitStatus = 1 /* AllOutputGenerationSkipped */;
  }
  else {
    var checker = program.getTypeChecker(true);
    var semanticErrors = checker.getDiagnostics();
    var emitOutput = checker.emitFiles();
    var emitErrors = emitOutput.errors;
    exitStatus = emitOutput.emitResultStatus;
    errors = ts.concatenate(semanticErrors, emitErrors);
  }
  reportDiagnostics(errors);
}

function asCanonical(changedFiles) {
  var changedCanonicalFiles = [];
  changedFiles.forEach(function (val) {
    changedCanonicalFiles.push(getCanonicalFileName(val));
  });

  return changedCanonicalFiles;
}

function recompile(changedFiles) {

  var canonicalChangedFiles = asCanonical(changedFiles);


  oldSourceFiles = {};
  program.getSourceFiles().forEach(function (val) {
    if (canonicalChangedFiles.indexOf(getCanonicalFileName(val.filename)) == -1) {
      oldSourceFiles[val.filename] = val;
    }
  })


  var newCompilerHost = ts.clone(firstCreatedCompilerHost);
  newCompilerHost.getSourceFile = function (fileName, languageVersion, onError) {
    fileName = getCanonicalFileName(fileName);
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
  var vm = require('vm');
  var pathToServicesFile = typeScriptServicePath;


  var fileData = fs.readFileSync(pathToServicesFile, 'utf8');
  var context = vm.createContext();
  vm.runInNewContext(fileData, context);

  if (!context.ts) throw new Error('ERROR_BRIDGE: Cannot find typescript service implementation in the file ' + pathToServicesFile);

  return context;
}

function getCanonicalFileName(fileName) {
  return sys.useCaseSensitiveFileNames ? fileName : fileName.toLowerCase();
}
function createCompilerHost(charset) {
  var currentDirectory;
  var existingDirectories = {};

  function getSourceFile(filename, languageVersion, onError) {
    try {
      if (logDebugData) {
        console.error('Read real file ' + filename);
      }
      var text = sys.readFile(filename, charset);
      if (filename.indexOf('lib.d.ts') == -1) {
        if (logDebugData) {
          console.error('text: ' + text);
        }
      }
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
      if (onError) {
        onError(e.message);
      }
    }
  }

  return {
    getSourceFile: getSourceFile,
    getDefaultLibFilename: function () {
      return ts.combinePaths(ts.normalizePath(typeScriptServiceDirectory), "lib.d.ts");
    },
    writeFile: writeFile,
    getCurrentDirectory: function () {
      return currentDirectory || (currentDirectory = sys.getCurrentDirectory());
    },
    useCaseSensitiveFileNames: function () {
      return sys.useCaseSensitiveFileNames;
    },
    getCanonicalFileName: getCanonicalFileName,
    getNewLine: function () {
      return sys.newLine;
    }
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

var sys = (function () {
  function getWScriptSystem() {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fileStream = new ActiveXObject("ADODB.Stream");
    fileStream.Type = 2;
    var binaryStream = new ActiveXObject("ADODB.Stream");
    binaryStream.Type = 1;
    var args = [];
    for (var i = 0; i < WScript.Arguments.length; i++) {
      args[i] = WScript.Arguments.Item(i);
    }
    function readFile(fileName, encoding) {
      if (!fso.FileExists(fileName)) {
        return undefined;
      }
      fileStream.Open();
      try {
        if (encoding) {
          fileStream.Charset = encoding;
          fileStream.LoadFromFile(fileName);
        }
        else {
          // Load file and read the first two bytes into a string with no interpretation
          fileStream.Charset = "x-ansi";
          fileStream.LoadFromFile(fileName);
          var bom = fileStream.ReadText(2) || "";
          // Position must be at 0 before encoding can be changed
          fileStream.Position = 0;
          // [0xFF,0xFE] and [0xFE,0xFF] mean utf-16 (little or big endian), otherwise default to utf-8
          fileStream.Charset = bom.length >=
                               2 &&
                               (bom.charCodeAt(0) ===
                                0xFF &&
                                bom.charCodeAt(1) ===
                                0xFE ||
                                bom.charCodeAt(0) ===
                                0xFE &&
                                bom.charCodeAt(1) ===
                                0xFF)
              ? "unicode"
              : "utf-8";
        }
        // ReadText method always strips byte order mark from resulting string
        return fileStream.ReadText();
      }
      catch (e) {
        throw e.number === -2147024809 ? new Error('unsupported file encoding') : e;
      }
      finally {
        fileStream.Close();
      }
    }

    function writeFile(fileName, data, writeByteOrderMark) {
      fileStream.Open();
      binaryStream.Open();
      try {
        // Write characters in UTF-8 encoding
        fileStream.Charset = "utf-8";
        fileStream.WriteText(data);
        // If we don't want the BOM, then skip it by setting the starting location to 3 (size of BOM).
        // If not, start from position 0, as the BOM will be added automatically when charset==utf8.
        if (writeByteOrderMark) {
          fileStream.Position = 0;
        }
        else {
          fileStream.Position = 3;
        }
        fileStream.CopyTo(binaryStream);
        binaryStream.SaveToFile(fileName, 2);
      }
      finally {
        binaryStream.Close();
        fileStream.Close();
      }
    }

    return {
      args: args,
      newLine: "\r\n",
      useCaseSensitiveFileNames: false,
      write: function (s) {
        WScript.StdOut.Write(s);
      },
      readFile: readFile,
      writeFile: writeFile,
      resolvePath: function (path) {
        return fso.GetAbsolutePathName(path);
      },
      fileExists: function (path) {
        return fso.FileExists(path);
      },
      directoryExists: function (path) {
        return fso.FolderExists(path);
      },
      createDirectory: function (directoryName) {
        if (!this.directoryExists(directoryName)) {
          fso.CreateFolder(directoryName);
        }
      },
      getExecutingFilePath: function () {
        return WScript.ScriptFullName;
      },
      getCurrentDirectory: function () {
        return new ActiveXObject("WScript.Shell").CurrentDirectory;
      },
      exit: function (exitCode) {
        try {
          WScript.Quit(exitCode);
        }
        catch (e) {
        }
      }
    };
  }

  function getNodeSystem() {
    var _fs = require("fs");
    var _path = require("path");
    var _os = require('os');
    var platform = _os.platform();
    // win32\win64 are case insensitive platforms, MacOS (darwin) by default is also case insensitive
    var useCaseSensitiveFileNames = platform !== "win32" && platform !== "win64" && platform !== "darwin";

    function readFile(fileName, encoding) {
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

    function writeFile(fileName, data, writeByteOrderMark) {
      // If a BOM is required, emit one
      if (writeByteOrderMark) {
        data = '\uFEFF' + data;
      }
      _fs.writeFileSync(fileName, data, "utf8");
    }

    return {
      args: process.argv.slice(2),
      newLine: _os.EOL,
      useCaseSensitiveFileNames: useCaseSensitiveFileNames,
      write: function (s) {
        // 1 is a standard descriptor for stdout
        _fs.writeSync(1, s);
      },
      readFile: readFile,
      writeFile: writeFile,
      watchFile: function (fileName, callback) {
        // watchFile polls a file every 250ms, picking up file notifications.
        _fs.watchFile(fileName, {persistent: true, interval: 250}, fileChanged);
        return {
          close: function () {
            _fs.unwatchFile(fileName, fileChanged);
          }
        };
        function fileChanged(curr, prev) {
          if (+curr.mtime <= +prev.mtime) {
            return;
          }
          callback(fileName);
        }
        ;
      },
      resolvePath: function (path) {
        return _path.resolve(path);
      },
      fileExists: function (path) {
        return _fs.existsSync(path);
      },
      directoryExists: function (path) {
        return _fs.existsSync(path) && _fs.statSync(path).isDirectory();
      },
      createDirectory: function (directoryName) {
        if (!this.directoryExists(directoryName)) {
          _fs.mkdirSync(directoryName);
        }
      },
      getExecutingFilePath: function () {
        return process.mainModule.filename;
      },
      getCurrentDirectory: function () {
        return process.cwd();
      },
      getMemoryUsage: function () {
        if (global.gc) {
          global.gc();
        }
        return process.memoryUsage().heapUsed;
      },
      exit: function (exitCode) {
        process.exit(exitCode);
      }
    };
  }

  if (typeof WScript !== "undefined" && typeof ActiveXObject === "function") {
    return getWScriptSystem();
  }
  else if (typeof module !== "undefined" && module.exports) {
    return getNodeSystem();
  }
  else {
    return undefined; // Unsupported host
  }
})();

var commandLine = (function (ts) {
  ts.optionDeclarations = [
    {
      name: "charset",
      type: "string"
    },
    {
      name: "codepage",
      type: "number"
    },
    {
      name: "declaration",
      shortName: "d",
      type: "boolean",
      description: ts.Diagnostics.Generates_corresponding_d_ts_file
    },
    {
      name: "diagnostics",
      type: "boolean"
    },
    {
      name: "emitBOM",
      type: "boolean"
    },
    {
      name: "help",
      shortName: "h",
      type: "boolean",
      description: ts.Diagnostics.Print_this_message
    },
    {
      name: "locale",
      type: "string"
    },
    {
      name: "mapRoot",
      type: "string",
      description: ts.Diagnostics.Specifies_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations,
      paramType: ts.Diagnostics.LOCATION
    },
    {
      name: "module",
      shortName: "m",
      type: {
        "commonjs": 1 /* CommonJS */,
        "amd": 2 /* AMD */
      },
      description: ts.Diagnostics.Specify_module_code_generation_Colon_commonjs_or_amd,
      paramType: ts.Diagnostics.KIND,
      error: ts.Diagnostics.Argument_for_module_option_must_be_commonjs_or_amd
    },
    {
      name: "noImplicitAny",
      type: "boolean",
      description: ts.Diagnostics.Warn_on_expressions_and_declarations_with_an_implied_any_type
    },
    {
      name: "noLib",
      type: "boolean"
    },
    {
      name: "noLibCheck",
      type: "boolean"
    },
    {
      name: "noResolve",
      type: "boolean"
    },
    {
      name: "out",
      type: "string",
      description: ts.Diagnostics.Concatenate_and_emit_output_to_single_file,
      paramType: ts.Diagnostics.FILE
    },
    {
      name: "outDir",
      type: "string",
      description: ts.Diagnostics.Redirect_output_structure_to_the_directory,
      paramType: ts.Diagnostics.DIRECTORY
    },
    {
      name: "removeComments",
      type: "boolean",
      description: ts.Diagnostics.Do_not_emit_comments_to_output
    },
    {
      name: "sourceMap",
      type: "boolean",
      description: ts.Diagnostics.Generates_corresponding_map_file
    },
    {
      name: "sourceRoot",
      type: "string",
      description: ts.Diagnostics.Specifies_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations,
      paramType: ts.Diagnostics.LOCATION
    },
    {
      name: "target",
      shortName: "t",
      type: {"es3": 0 /* ES3 */, "es5": 1 /* ES5 */},
      description: ts.Diagnostics.Specify_ECMAScript_target_version_Colon_ES3_default_or_ES5,
      paramType: ts.Diagnostics.VERSION,
      error: ts.Diagnostics.Argument_for_target_option_must_be_es3_or_es5
    },
    {
      name: "version",
      shortName: "v",
      type: "boolean",
      description: ts.Diagnostics.Print_the_compiler_s_version
    },
    {
      name: "watch",
      shortName: "w",
      type: "boolean",
      description: ts.Diagnostics.Watch_input_files
    }
  ];
  var shortOptionNames = {};
  var optionNameMap = {};
  ts.forEach(ts.optionDeclarations, function (option) {
    optionNameMap[option.name.toLowerCase()] = option;
    if (option.shortName) {
      shortOptionNames[option.shortName] = option.name;
    }
  });
  function parseCommandLine(commandLine) {
    // Set default compiler option values
    var options = {
      target: 0 /* ES3 */,
      module: 0 /* None */
    };
    var filenames = [];
    var errors = [];
    parseStrings(commandLine);
    return {
      options: options,
      filenames: filenames,
      errors: errors
    };
    function parseStrings(args) {
      var i = 0;
      while (i < args.length) {
        var s = args[i++];
        if (s.charCodeAt(0) === 64 /* at */) {
          parseResponseFile(s.slice(1));
        }
        else if (s.charCodeAt(0) === 45 /* minus */) {
          s = s.slice(s.charCodeAt(1) === 45 /* minus */ ? 2 : 1).toLowerCase();
          // Try to translate short option names to their full equivalents.
          if (ts.hasProperty(shortOptionNames, s)) {
            s = shortOptionNames[s];
          }
          if (ts.hasProperty(optionNameMap, s)) {
            var opt = optionNameMap[s];
            // Check to see if no argument was provided (e.g. "--locale" is the last command-line argument).
            if (!args[i] && opt.type !== "boolean") {
              errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.Compiler_option_0_expects_an_argument, opt.name));
            }
            switch (opt.type) {
              case "number":
                options[opt.name] = parseInt(args[i++]);
                break;
              case "boolean":
                options[opt.name] = true;
                break;
              case "string":
                options[opt.name] = args[i++] || "";
                break;
              default:
                var value = (args[i++] || "").toLowerCase();
                if (ts.hasProperty(opt.type, value)) {
                  options[opt.name] = opt.type[value];
                }
                else {
                  errors.push(ts.createCompilerDiagnostic(opt.error));
                }
            }
          }
          else {
            errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.Unknown_compiler_option_0, s));
          }
        }
        else {
          filenames.push(s);
        }
      }
    }

    function parseResponseFile(filename) {
      var text = sys.readFile(filename);
      if (!text) {
        errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.File_0_not_found, filename));
        return;
      }
      var args = [];
      var pos = 0;
      while (true) {
        while (pos < text.length && text.charCodeAt(pos) <= 32 /* space */) {
          pos++;
        }
        if (pos >= text.length) {
          break;
        }
        var start = pos;
        if (text.charCodeAt(start) === 34 /* doubleQuote */) {
          pos++;
          while (pos < text.length && text.charCodeAt(pos) !== 34 /* doubleQuote */) {
            pos++;
          }
          if (pos < text.length) {
            args.push(text.substring(start + 1, pos));
            pos++;
          }
          else {
            errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.Unterminated_quoted_string_in_response_file_0, filename));
          }
        }
        else {
          while (text.charCodeAt(pos) > 32 /* space */) {
            pos++;
          }
          args.push(text.substring(start, pos));
        }
      }
      parseStrings(args);
    }
  }

  ts.parseCommandLine = parseCommandLine;
});


exports.createCompilerHost = createCompilerHost;
exports.compileFile = compileFile;
exports.initCompiler = initCompiler;