var g1 = require('./greet1');
var g2a = require('./greet2');
var g2b = require('./greet2').greet;
var g3 = require('./greet3');
var g4 = require('./greet4');
var g5 = required('./greet5');

g1();

g2a.greet();
g2b();
g3.greet();

// NOte, if you "require" the same module than once in 
// your app, whether from this file or from multiple files, 
// the file is only loaded once, and everyone refers to the 
// same object.

var g4Greeter = new g4();
g4Greeter.greet();

g5.greet();


