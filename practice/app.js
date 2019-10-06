var EventEmitter = require('events');
var util = require('util');


function Greetr() {
   this.greeting = "Hello World";
}

// modify Greetr so that it has all the methods and properties of EventEmitter
// this must be done before adding to the prototype with other properties/methods.
// creates a new prototype chain from Greetr to EventEmitter so that Greetr can use EventEmitter directly
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
   console.log(this.greeting + ": " + data);
   this.emit('greet', data); // a property from EventEmitter;
}

var g1 = new Greetr();

g1.on('greet', function (data) {
   console.log("Someone greeted me with data: " + data);
});

g1.greet("fubar");
