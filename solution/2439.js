let fs = require("fs");
let input = fs.readFileSync("/dec/stdin").toString().split("\n");

let num = Number(input[0]);

let star = "";

for (i = 1; i <= num; i++) {
  for (j = 0; j < num - i; j++) {
    star += " ";
  }
  for (j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);
