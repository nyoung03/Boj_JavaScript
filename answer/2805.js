let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let tree = Number(input[0].split(" ")[0]);
let treeLength = Number(input[0].split(" ")[1]);
let treeArr = input[1].split(" ").map(Number);

let start = 0; // 가능한 가장 작은 값
let end = treeArr.reduce((a, b) => Math.max(a, b)); // 최댓값

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재 높이
  let total = 0; // 현재 높이로 잘랐을 때 얻는 나무의 양
  for (x of treeArr) {
    if (x > mid) total += x - mid;
  }
  if (total < treeLength) end = mid - 1;
  else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
