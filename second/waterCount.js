function waterAmount(arr) {
  const n = arr.length;

  let directArr = new Array(n);
  let reverseArr = new Array(n);
  let water = 0;

  directArr[0] = arr[0];
  for (let i = 1; i < n; ++i) {
    directArr[i] = Math.max(directArr[i - 1], arr[i]);
  }

  reverseArr[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; --i) {
    reverseArr[i] = Math.max(reverseArr[i + 1], arr[i]);
  }

  arr.forEach((item, index) => {
    water += Math.min(directArr[index], reverseArr[index]) - item;
  });

  return water;
}

console.log(waterAmount([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])) // 17
console.log(waterAmount([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])) // 10
console.log(waterAmount([7, 0, 1, 3, 4, 1, 2, 1])) // 9
console.log(waterAmount([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])) // 10
console.log(waterAmount([2, 2, 1, 2, 2, 3, 0, 1, 2])) // 4
console.log(waterAmount([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8])) // 24
console.log(waterAmount([2, 2, 2, 2, 2])) // 0
