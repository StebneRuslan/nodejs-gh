const head = Symbol('head')

class LinkedNode {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this[head] = null
  }

  push (value) {
    const newLink = new LinkedNode(value)
    if (!this[head]) {
      this[head] = newLink
    } else {
      let current = this[head]
      while (current.next) {
        current = current.next
      }
      current.next = newLink
    }
  }

  * values () {
    let current = this[head]
    while (current) {
      yield current.data
      current = current.next
    }
  }

  [Symbol.iterator] () {
    return this.values()
  }
}

function calcLikLists (first, second) {
  const arrResult = (+[...first].reverse().join('') + +[...second].reverse().join('')).toString().split('')
  const resLinkList = new LinkedList()
  arrResult.forEach((value) => resLinkList.push(value))
  return resLinkList
}

const first = new LinkedList()
first.push(2)
first.push(4)
first.push(3)
const second = new LinkedList()
second.push(5)
second.push(6)
second.push(4)
second.push(4)
second.push(4)
console.log(calcLikLists(first, second))
console.log(...calcLikLists(first, second))
