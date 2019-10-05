var Emitter = require('./emitter');

var emitter = new Emitter();

emitter.on('greet', function () {
   console.log("Hello greet 1");
});

emitter.on('greet', function () {
   console.log("Hello greet 2");
});

emitter.emit('greet');