const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);

for (i = 1; i <= num; i++) {
  let a = "*".repeat(i);
  console.log(a);
}
