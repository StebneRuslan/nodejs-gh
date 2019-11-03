const buttonCharts = {
  1: ['', '', ''],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  0: [' '],
  '*': ['.'],
  '#': ['']
}

let word = ''
let timeout = null
function Phone () {
  const screen = document.getElementById('screen')
  let callCount = 0
  let currentLength = 0
  let currentButtonValue = ''
  function setWordToHtml (word) {
    screen.innerText = word
  }
  this.press = function (event) {
    if (event.target.innerText === '#') {
      callCount = 0
      word = ''
      setWordToHtml(word)
    }
    if (event.target !== event.currentTarget) {
      if (!currentButtonValue || currentButtonValue === event.target.innerText) {
        callCount >= buttonCharts[event.target.innerText].length ? callCount = 1 : callCount++
        word = word.substr(0, currentLength) + buttonCharts[event.target.innerText][callCount - 1]
        setWordToHtml(word)
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          currentLength = word.length
          callCount = 1
          clearTimeout(timeout)
        }, 500)
      } else {
        currentButtonValue = ''
        currentLength = word.length
        callCount = 1
        word = word.substr(0, currentLength) + buttonCharts[event.target.innerText][callCount - 1]
        setWordToHtml(word)
      }
      currentButtonValue = event.target.innerText
    }
  }
}

const phone = new Phone()
document.getElementById('keyboard').addEventListener('click', phone.press)
