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
    if (currentCommand == 'compile') {
        var files = inputBuffer.trim().split('\n');
        console.log("compile start '" + inputBuffer + "'");
        compilerWrapper.compileFile(files);
        console.log('compile end');
    }
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

        if (currentCommand == null) {
            if (isSystemCommand(chunk)) {
                var possibleCommand = chunk.split(' ')[1];
                if (possibleCommand) {
                    currentCommand = possibleCommand.trim();
                    console.log('state -> ' + currentCommand);
                }
            }
            return;
        }

        if (!isSystemCommand(chunk)) {
            inputBuffer += chunk;
            console.log('read chunk -> ' + inputBuffer);
            return;
        }

        console.log('end command -> ' + currentCommand);
        validateCompilerState(chunk);
        processCommand(currentCommand, inputBuffer);

        currentCommand = null;
        inputBuffer = '';
    });


}

var compilerWrapper = require('./ts-compiler-host-impl');
var params = parseParams();
var servicePath = params.servicePath;
var sessionId = params.sessionId;
compilerWrapper.initCompiler(servicePath, sessionId);
initStdin();








