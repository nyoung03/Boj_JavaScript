let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);

let a = [];
for (i = 1; i <= testCase; i++) {
  let data = input[i].split(" ").map(Number);

  let student = data[0];

  let sum = 0;
  for (j = 1; j <= student; j++) {
    sum += data[j];
  }
  let avg = sum / student;

  let count = 0;
  for (n = 1; n <= student; n++) {
    if (data[n] > avg) {
      count += 1;
    }
  }
  console.log(((count / student) * 100).toFixed(3) + "%");
}
