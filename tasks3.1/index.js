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
  zero: [' '],
  '*': ['.'],
  '#': ['']
}

let word = ''
let timeout = null
const keyboard = document.getElementById('keyboard')
function Phone () {
  const screen = document.getElementById('screen')
  let callCount = 0
  let currentLength = 0
  let currentButtonValue = ''
  function setWordToHtml (word) {
    screen.innerHTML = word
  }
  this.press = function (event) {
    if (event.target.id === '#') {
      callCount = 0
      word = ''
      setWordToHtml(word)
    }
    if (event.target !== event.currentTarget) {
      if (!currentButtonValue || currentButtonValue === event.target.id) {
        callCount >= buttonCharts[event.target.id].length ? callCount = 1 : callCount++
        word = word.substr(0, currentLength) + buttonCharts[event.target.id][callCount - 1]
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
        word = word.substr(0, currentLength) + buttonCharts[event.target.id][callCount - 1]
        setWordToHtml(word)
      }
      currentButtonValue = event.target.id
    }
  }
}

function createKeyboard () {
  for (const button in buttonCharts) {
    const buttonNode = document.createElement('button')
    buttonNode.innerHTML = buttonCharts[button].join(' ')
    buttonNode.classList.add('button')
    buttonNode.id = button
    keyboard.appendChild(buttonNode)
  }
}
createKeyboard()
const phone = new Phone()
keyboard.addEventListener('click', phone.press)
