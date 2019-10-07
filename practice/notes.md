## Modules, Imports and Requires  
Common JS Modules - a set of standards for how code modules should be structured  

## First Class Functions & Function Expressions  
- first class function -- You can use functions like strings, numbers, etc, in that you can pass them around, set variables equal to them, put them in arrays, and more. -- that's a first class function.
- function expression -- a block of code that results in a value.  

```
greet();

var g = greet;
g();

function logGreeting(fn) {
   fn();
}

logGreeting(function () {
   console.log("Hello");
})
```

## Event and Event Emitter

two kinds of events in nodejs:
1. System Events (come from the C++ core, libuv)
2. Custom Events (come from the JS core... things that I create myself, the event emitter)

Often tines, the c++ core uses the event emitter.


## JS is synchronous -- one thing running at a time
## nodejs is asynchronuous

## System Events
libuv - a library to handle low-level events
libuv - has an event loop, constantinc checking a queue for things that have completed, and when completed it removes from the queue and invokes the callback into V8.
libuv.org - asynchronous I/O made simple

## Streams and Buffers

## Binary Data, Character Sets & Encodings
character set - a representation of characters as numbers .. what number is used to represent a character.
e.g. unicode

character encoding - how many bits we use to represent a number (8, 16)
e.g. utf-8 (the  most popular)

Historically, JS is not very good at handling binary dat. 
Because of that, node gives us mechanisms to deal with binary data.

## Buffers in node
nodejs.org/api
- buffer

stores binary data
supports different kinds of encodingss
   - ascii, utf8...

   