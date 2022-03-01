let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let maxvalue = 0;
let maxindex = 0;

for (i = 0; i < 9; i++) {
  let a = Number(input[i]);

  if (a > maxvalue) {
    maxvalue = a;
    maxindex = i;
  }
}
console.log(maxvalue);
console.log(maxindex + 1);
