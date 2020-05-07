// let and const
var str = "String";
let str2 = "String in Let";
const str3 = "String in Const";
// str3 = "Changed Value";

// Arrow Functions
var fn = (name, age) => {
  console.log("I am" + name + " and I am " + age);
};

var fn2 = function (name, age) {
  console.log("I am" + name + " and I am " + age);
};

fn("Arsalan", 20);
fn("ARSALAN", 20);
// forEach
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr = arr.map((value) => {
  return value * 2;
});
console.log(arr);
// [2,3,6,8,16,25...]
// Map

// filter
