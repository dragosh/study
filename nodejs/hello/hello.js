
var http = require('http');
var redis = require('redis');
var fs = require('fs');
var server = http.createServer();

//require custom
var myModule = require('./my_module');

var client = redis.createClient();
client.on("error", function (err) {
        console.log("Error " + err);
    });
client.set("string key", "string val", redis.print);
    client.hset("hash key", "hashtest 1", "some value", redis.print);
    client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
    client.hkeys("hash key", function (err, replies) {
        console.log(replies.length + " replies:");
        replies.forEach(function (reply, i) {
            console.log("    " + i + ": " + reply);
        });
        client.quit();
    });
/*
|--------------------------------------------------------------------------
| Sample hello
*/
// server.listen(8000);
// server.on('request',function(req,res) {
//     var body = 'Hello world';
//     res.writeHead(200,{
//         'Content-Length': body.length,
//         'Content-Type': 'text/html',
//     });
//     res.end(body);
// });
myModule.test();
myModule.foo();
