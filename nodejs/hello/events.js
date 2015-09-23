
var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();

logger.on('custom:event', function(foo){
    console.log(foo);
});

var foo = 'Test events';
logger.emit('foo',foo);


