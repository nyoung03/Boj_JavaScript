let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0]);
let sum = "";

for (i = 1; i <= a; i++) {
  let x = Number(input[i].split(" ")[0]);
  let y = Number(input[i].split(" ")[1]);

  sum += x + y + "\n";
}

console.log(sum);
