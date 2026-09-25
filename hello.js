
var http = require('http');
var fs = require('fs'); //　①

var server = http.createServer(function(req, res) {
    fs.readFile('./temp.html', 'utf-8', function(err, data) { //　②
        res.writeHead(200, {'Content-Type': 'text/html'}); // ③
        res.write(data);
        res.end();
    })
});

server.listen(3000);
console.log('サーバーを起動しました。');
