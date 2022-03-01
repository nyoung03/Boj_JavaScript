const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let h = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);

if (m < 45) {
  if (h == 0) {
    h = 23;
  } else {
    h = h - 1;
  }
  m = m - 45 + 60;
} else {
  h = h;
  m = m - 45;
}

console.log(h, m);
