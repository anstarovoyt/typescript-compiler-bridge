var logDebugData = false;

function parseParams() {
    var result = {};
    var args = process.argv.slice(2);
    args.forEach(function (value, index, arr) {
        if (value.indexOf("-id=") === 0) {
            result.sessionId = value.split('=')[1];
        }

        if (value.indexOf("-servicePath=") === 0) {
            result.servicePath = value.split('=')[1];
        }
    });

    return result;
}

function processCommand(currentCommand, inputBuffer) {
    if ('compile' == currentCommand) {
        var files = inputBuffer.trim().split('\n');
        compilerWrapper.compileFile(files);
        fireCommand('end')
    }
}

function fireCommand(command) {
    process.stdout.write(sessionId + ' ' + command + '\n');
}

function loDataIfEnabled(value) {
    if (logDebugData) console.error(value.trim());
}

function initStdin() {
    process.stdin.setEncoding('utf8');

    var currentCommand = null;
    var inputBuffer = '';

    var validateCompilerState = function(chunk) {
        var end = chunk.split(' ')[1];
        if (end != 'end') throw new Error('Incorrect compiler state');
    };

    var isSystemCommand = function (chunk) {
        return chunk.indexOf(sessionId) == 0;
    };

    process.stdin.on('readable', function () {
        var chunk = process.stdin.read();
        if (chunk == null) return;

        loDataIfEnabled('"' + chunk + '"');

        processChunk(chunk);
    });

    var actualChunk = '';
    function processChunk(chunk) {
        if (chunk.substring(chunk.length - 1) === '\n') {
            //terminal symbol
            var processedChunk = actualChunk + chunk;
            actualChunk = '';

            processedChunk.split('\n').forEach(processLine);

        } else {
            //just waiting terminal
            actualChunk += chunk;
        }
    }

    function processLine(line) {
        if (currentCommand == null) {
            if (isSystemCommand(line)) {
                var possibleCommand = line.split(' ')[1];
                if (possibleCommand) {
                    currentCommand = possibleCommand.trim();
                    loDataIfEnabled('going to state ' + currentCommand);
                }
            }
            return;
        }

        if (!isSystemCommand(line)) {
            loDataIfEnabled('aggregate data: ' + line);
            inputBuffer += line + '\n';
            return;
        }

        loDataIfEnabled('going to end state ' + currentCommand);
        validateCompilerState(line);
        processCommand(currentCommand, inputBuffer);

        currentCommand = null;
        inputBuffer = '';
    }
}

var compilerWrapper = require('./ts-compiler-host-impl');
var params = parseParams();
var servicePath = params.servicePath;
var sessionId = params.sessionId;
compilerWrapper.initCompiler(servicePath, sessionId);
initStdin();
fireCommand('ready');











