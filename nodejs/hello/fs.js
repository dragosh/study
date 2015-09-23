
/*
|--------------------------------------------------------------------------
| Make a copy of a file
*/
var fs = require('fs');
var testFile = fs.createReadStream('test.html');
var copyTestFile = fs.createWriteStream('test_copy.html');

testFile.pipe(copyTestFile);


var fs = require('fs');

var file = fs.createReadStream("icon.png");
var newFile = fs.createWriteStream("icon-new.png");

/*
|--------------------------------------------------------------------------
| Without pipe
*/
file.on('data', function(chunk) {
  var buff = newFile.write(chunk);
  if(! buff ) file.pause();
});

newFile.on('drain', function() {
  file.resume();
});

file.on('end', function() {
  newFile.end();
});





