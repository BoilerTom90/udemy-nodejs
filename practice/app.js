'use strict';

// classes are really just syntactic sugar for hiding prototypal inheritance. 
class Person {
   constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
   }

   greet() {
      console.log(`Hello ${this.firstname} ${this.lastname}`)
   }
}


let tom = new Person("Tom", "Hoffman");
tom.greet();

console.log(tom.__proto__);