let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = input[0];
let b = input[1].split(" ").map((num) => Number(num));

let maxN = Math.max.apply(null, b);
let minN = Math.min.apply(null, b);

console.log(minN, maxN);
