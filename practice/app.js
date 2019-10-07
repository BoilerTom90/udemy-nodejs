

// buffer is part of nodejs... require not necessary
//var buffer = new Buffer('Hello', 'utf8');
var buffer = new Buffer.from('Hello');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
buffer.write('wo');
console.log(buffer.toString());

// how to deal with binary data in a buffer
// 
var ab = new ArrayBuffer(8 /* bytes */);
var view = new Int32Array(ab); // big enough for two values in ab
view[0] = 5;
view[1] = 15;
view[3] = 30; // won't do anything because there isn't space in the view for it.
console.log(view);
console.log(ab);