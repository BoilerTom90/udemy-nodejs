// Using the nodejs Event Emitter
var Emitter = require('events');
var events = require('./config').events;

var emitter = new Emitter();

emitter.on(events.GREET, function () {
   console.log("Hello greet 1");
});

emitter.on(events.GREET, function () {
   console.log("Hello greet 2");
});

emitter.emit(events.GREET);