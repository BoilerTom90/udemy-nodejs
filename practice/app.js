function greet(callback) {
   console.log("hello");
   var data = {
      name: 'John Doe'
   };
   callback(data);
}

greet(function (data) {
   console.log("Callback called with data: " + data);
})
