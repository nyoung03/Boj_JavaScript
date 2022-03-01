let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let x = Number(input[0].split(" ")[1]);

let a = input[1].split(" ").map((num) => Number(num));

let y = "";

for (i = 0; i < a.length; i++) {
  if (a[i] < x) {
    y += a[i] + " ";
  }
}
console.log(y);
