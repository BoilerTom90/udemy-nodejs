var fs = require('fs'); // file system lib

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

greet = fs.readFile(__dirname + '/greet.txt', 'utf8',
   function (err, data) { // error first callbacks -- the error is first in the callback
      if (err == null) {
         console.log(data);
      } else {
         console.log(err);
      }
   })
console.log("Done!");

//
// this example demonstrates using the filesystem (fs) library and reading a file in sync and async mode.
//