// For Loop
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// var j = 0;
// while (j < 10) {
//   console.log(j);
//   j++;
// }
// Do While Loop
// {}
// do {
//    // code
// } while(true);

// forOf
var arr = [1, 2, 3, 4, 5];
for (var key of arr) {
  console.log(key);
}

var arr2 = [
  1,
  2,
  "Arsalan",
  "Hello",
  function fn() {
    console.log("Hello World");
  },
];
var arr3 = [
  {
    name: "Arsalan",
  },
  4,
  5,
  6,
];

console.log(arr2[2]);
console.log(arr3[0].name);
