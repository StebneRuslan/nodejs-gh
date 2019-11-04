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
      resArr[i] = callback(this[i], i)
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

  sort: function () {
    time('arrayMethods', 'sort')
    const list = Array.from(this)
    for (let i = 1; i < list.length; i++) {
      if (list[i] < list[0]) {
        list.unshift(list.splice(i, 1)[0])
      } else if (list[i] > list[i - 1]) {
        continue
      } else {
        for (let j = 1; j < i; j++) {
          if (list[i] > list[j - 1] && list[i] < list[j]) {
            list.splice(j, 0, list.splice(i, 1)[0])
          }
        }
      }
      count('arrayMethods', 'sort')
    }
    timeEnd('arrayMethods', 'sort')
    return list
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

arr.myMap((element) => {
  return element * 2
})

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

console.log(pushArray.mySort())
logGroup('arrayMethods')
