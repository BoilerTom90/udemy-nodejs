// object.create examle
// setting up the prototype chain

var person = {
   fname: '',
   lname: '',
   greet: function () {
      return this.fname + " " + this.lname;
   }
}

var john = Object.create(person);
john.fname = "John";
john.lname = "Doe";

console.log(john.greet());