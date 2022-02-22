let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);

let arr = [];

for (i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[0] != b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let answer = "";
for (card of arr) {
  answer += card[0] + " " + card[1] + "\n";
}
console.log(answer);
