


var out = process.stdout;

out.write('text ' + '\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write('data: ' + chunk);
    }
});

var compilerWrapper = require('./ts-compiler-host-impl');





