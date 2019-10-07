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