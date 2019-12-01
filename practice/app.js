var fs = require('fs'); // file system lib
var zlib = require('zlib'); // a compression libarary

var readable = fs.createReadStream(__dirname + '/greet.txt');
var writeable = fs.createWriteStream(__dirname + '/greetCopy.txt');
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');


var gzip = zlib.createGzip();
// using pipe to stream input data to an output stream
readable.pipe(writeable);

// read from the input file, compress each chunk, then pipe each chunk to the 
// output stream (uses chaining)
readable.pipe(gzip).pipe(compressed);
