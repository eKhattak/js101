// Function Declaration
function fnc() {}
// Function Expression
var fn = function () {};

// IIFE
// Objects
var a = {};
function fn(name) {
  console.log(name);
}

// fn();
// fn("Arsalan");

// Function Expression
var fnEx = function fn2(name) {
  console.log(name);
};
// fnEx("ARsalan");

var fnEx2 = function (name) {
  console.log(name);
};

// fnEx2("Khattak");

// IIFE (Immediately Invoked Function Expression)
(function () {
  var name = "Sheharyar";
  console.log(name);
  //
})();

// console.log(name);
// name
// console.log(obj.name);
// console.log(obj["name"]);
// 🚩  Non Primitive Values are Mutable

// Immutable

var a = 5;

var b = a;

// Memory
/*
    a = 5;
    b = 5;


*/
// b = 5;

console.log(a == b); // true
b = 6; // 6 , a = 5
console.log(a == b); // false ,
console.log(a, b);

// Mutable

// Objects
var obj = {
  name: "Arsalan Khattak",
  location: "Islamabad",
  age: 20,
  // ..
};

var obj2 = obj;

// Memory
/*
obj2 ->  {
    name: "Arsalan Khattak",
  location: "Islamabad",
  age: 20,
  fn: "This is a New Property"
}

obj {

}

*/

obj2.fn = "This is a New Property";

console.log(obj.fn); // This is a New Property
console.log(obj2 == obj);

obj = {};

// obj = {}
// obj2 =

console.log(obj == obj2); // false
