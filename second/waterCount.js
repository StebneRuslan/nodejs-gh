function waterAmount (arr) {
  let secondMax = 0
  let res = 0

  while (arr.length > 0) {
    let firstMax = arr[0]
    let i = 0
    i += 1
    const waterArray = []
    waterArray.push(firstMax)
    if (firstMax <= arr[i]) {
      firstMax = arr[i]
      waterArray.shift()
      arr.shift()
      waterArray.push(firstMax)
    } else {
      for (let j = i; j < arr.length; j++) {
        if (arr[j] >= firstMax) {
          secondMax = arr[j]
          waterArray.push(secondMax)
          break
        }
        if (firstMax === Math.max.apply(null, arr)) {
          arr.reverse()
          i = 0
          break
        }
        waterArray.push(arr[j])
        i += 1
      }
      arr.splice(0, i)
    }
    res += countWater(waterArray)
  }
  return res
}

function countWater (arr) {
  let start = arr[0]
  let res = 0
  if (arr[0] < arr[arr.length - 1]) {
    start = arr[0]
  } else {
    arr.reverse()
    start = arr[0]
  }
  for (let i = 1; i < arr.length - 1; i++) {
    res += start - arr[i]
  }
  return res
}

console.log(waterAmount([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])) // 17
console.log(waterAmount([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])) // 10
console.log(waterAmount([7, 0, 1, 3, 4, 1, 2, 1])) // 9
console.log(waterAmount([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])) // 10
console.log(waterAmount([2, 2, 1, 2, 2, 3, 0, 1, 2])) // 4
console.log(waterAmount([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8])) // 24
console.log(waterAmount([2, 2, 2, 2, 2])) // 0
