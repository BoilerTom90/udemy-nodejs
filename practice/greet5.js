var greeting = 'Hello World (5)';

function greet() {
   console.log(greeting);
}

module.exports = {
   greet: greeting
}

// the revealing module pattern...
// expose only the properties and methods we want via
// a returned object.