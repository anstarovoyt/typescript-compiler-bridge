var net = require('net');


var myHost = require('./myHost');

server = net.createServer({allowHalfOpen: true}, function (socket) {
    socket.allowHalfOpen = true;

    var first = true;
    socket.on('data', function (d) {
        var data = d.toString();
        console.error('consume ' + data);
        if (first) {
            myHost.compileFile(data);
            console.error('compiled ');
            first = false;
        } else {
            myHost.recompileFile(data);
            console.error('recompiled ');
        }

        console.error('write ok');
        socket.write('ok\n');
        console.error('writed ok');

    });

});

server.listen(function () {
    address = server.address();
    console.error("@%s@", address.port);
});

server.on('error', function (e) {
    if (e.code == 'EADDRINUSE') {
        log.error('Address in use, close server.');
        setTimeout(function () {
            server.close();
        }, 1000);
    }
});