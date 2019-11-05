// 1) myForEach - тот же самый forEach
// 2) myMap - тот же самый map
// 3) mySort - тот же самый sort
// 4) myFilter
// 5) myPush
const { time, timeEnd, count, logGroup } = require('./timer')

const arrayMethods = {
  forEach: function (callback) {
    time('arrayMethods', 'foreach')
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i)
      count('arrayMethods', 'foreach')
    }
    timeEnd('arrayMethods', 'foreach')
  },

  map: function (callback) {
    time('arrayMethods', 'map')
    const resArr = Array.from(this)
    for (let i = 0; i < this.length; i++) {
      resArr[i] = callback(this[i], i, this)
      count('arrayMethods', 'map')
    }
    timeEnd('arrayMethods', 'map')
    return resArr
  },

  filter: function (callback) {
    time('arrayMethods', 'filter')
    const res = []
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], ...this)) {
        res.push(this[i])
      }
      count('arrayMethods', 'filter')
    }
    timeEnd('arrayMethods', 'filter')
    return res
  },

  sort: function (callback) {
    time('arrayMethods', 'sort')
    for (let i = 0, endI = this.length - 1; i < endI; ++i) {
      let wasSwap = false
      for (let j = 0, endJ = endI - i; j < endJ; ++j) {
        if (!callback ? (String(this[j]) > String(this[j + 1])) : callback(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]]
          wasSwap = true
        }
        count('arrayMethods', 'sort')
      }
      if (!wasSwap) {
        break
      }
    }
    timeEnd('arrayMethods', 'sort')
    return this
  },

  push: function (element) {
    this[this.length] = element
    count('arrayMethods', 'push')
    return this.length
  }
}

Array.prototype.myForEach = arrayMethods.forEach
Array.prototype.myMap = arrayMethods.map
Array.prototype.myFilter = arrayMethods.filter
Array.prototype.myPush = arrayMethods.push
Array.prototype.mySort = arrayMethods.sort

const arr = new Array(1000)
arr.myForEach((element) => {
  return element * 2
})

arr.myMap((element, index, arr) => {
  console.log(element, index, arr)
  return element * 2
})

console.log(arr)

arr.myFilter((element) => {
  return element === undefined
})

time('arrayMethods', 'push')
const pushArray = []
for (let i = 0; i < 1000; i++) {
  pushArray.myPush(i)
}
timeEnd('arrayMethods', 'push')
pushArray.reverse()

const sortArray = [Infinity, 10, null, 1, 2, 22, 11, 55, '1', 44]
const callback = (a, b) => {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}
console.log(sortArray.mySort(callback))
console.log(sortArray.sort(callback))
logGroup('arrayMethods')
