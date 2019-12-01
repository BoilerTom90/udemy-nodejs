var fs = require('fs'); // file system lib

var readable = fs.createReadStream(__dirname + '/greet.txt',
   {
      encoding: 'utf8',         // to retrun string data instead of binary data
      highWaterMark: 16 * 1024  // to read smaller chunks at a time
   });
var writeable = fs.createWriteStream(__dirname + '/greetCopy.txt');

readable.on('data', (chunk) => {
   console.log(chunk);
   writeable.write(chunk);
});

return;

// Synchronous file reading...
greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log("Contents of Greet: " + greet);


for (var i = 0; i < 10; i++) {
   let loop = i;
   greet = fs.readFile(__dirname + '/greet.txt', 'utf8',
      function (err, data) { // error first callbacks -- the error is first in the callback
         if (err == null) {
            console.log("i/loop: " + i + "/" + loop + " => " + data);
         } else {
            console.log(err);
         }
      })
}
// The above outputs this:
/*
      i/loop: 10/0 => Hello World!
      i/loop: 10/2 => Hello World!
      i/loop: 10/1 => Hello World!
      i/loop: 10/3 => Hello World!
      i/loop: 10/7 => Hello World!
      i/loop: 10/5 => Hello World!
      i/loop: 10/4 => Hello World!
      i/loop: 10/6 => Hello World!
      i/loop: 10/9 => Hello World!
      i/loop: 10/8 => Hello World!
*/

console.log("Done!");

//
// this example demonstrates using the filesystem (fs) library and reading a file in sync and async mode.
//