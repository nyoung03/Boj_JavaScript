let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0]);

let arr = [];

for (i = 1; i <= a; i++) {
  arr.push(Number(input[i]));
}

// 산술평균
let answer = 0;
answer += Math.round(arr.reduce((a, b) => a + b) / a);
console.log(answer);

// 중앙값
arr.sort((a, b) => a - b);
let median = arr[parseInt(a / 2)];
console.log(median);

// 각각의 빈도수
let counter = new Map();
for (i = 0; i < a; i++) {
  if (counter.has(arr[i])) {
    counter.set(arr[i], counter.get(arr[i]) + 1);
  } else {
    counter.set(arr[i], 1);
  }
}

// 빈도수가 많은 키들 찾기
let maxvalue = 0;
let maxelements = [];
for (j of counter.keys()) {
  if (maxvalue < counter.get(j)) {
    maxvalue = counter.get(j);
    maxelements = [j];
  } else if (maxvalue == counter.get(j)) {
    maxelements.push(j);
  }
}

if (maxelements.length >= 2) {
  console.log(maxelements[1]);
} else {
  console.log(maxelements[0]);
}
// 범위, 위에서 정렬을 했기 때문에 가능한 식
console.log(arr[a - 1] - arr[0]);
