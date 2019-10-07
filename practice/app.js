'use strict';

var Greetr = require('./greeter');

var g = new Greetr();
g.on('greet', function (data) {
   console.log("On popped: " + data);
});
g.greet("****************************");