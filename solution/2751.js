let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let m = [];

for (i = 1; i <= n; i++) {
  m.push(Number(input[i]));
}

m.sort((a, b) => a - b);
let answer = "";
for (i = 0; i < n; i++) {
  answer += m[i] + "\n";
}
console.log(answer);
