let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);

let list = [];

for (i = 1; i <= n; i++) {
  list.push(input[i].split(" "));
}

list.sort((a, b) => {
  if (a[0] != b[0]) return a[0] - b[0];
});

for (x of list) {
  console.log(x[0] + " " + x[1]);
}
