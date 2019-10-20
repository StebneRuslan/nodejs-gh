// Find in array: sum, min and max, replace min and max - create custom functions
function minMaxSum (arr) {
  const max = Math.max.apply(null, arr)
  const min = Math.min.apply(null, arr)
  arr[arr.indexOf(max)] = min
  arr[arr.indexOf(min)] = max
  return {
    min: min,
    max: max,
    sum: arr.reduce((a, b) => a + b),
    arr: arr
  }
}
// console.log(minMaxSum([-1, -1, 1, 2, 5, 8, 10, 10]))

// Create function which will return function with callback in arguments
function wrapper (...args) {
  return args.pop()(...args)
}
// wrapper(1, 2, (...args) => {
//   console.log('callback arguments ', args)
// })

// Create a function that will replace all number dividing three with ‘foo’,
// dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.
function replacer (...args) {
  return args.map((number) => {
    if (!(number % 7) && !(number % 3)) {
      return 'foobar'
    } else if (!(number % 3)) {
      return 'foo'
    } else if (!(number % 7)) {
      return 'bar'
    }
    return number
  })
}
// console.log(replacer(3, 4, 5, 7, 21))

// Create function with 2 string params.
// It must check if letters in the first correspond to the number of matches in second and return %.
function synonymizer (firstWord, secondWord) {
  const similars = [];
  [].forEach.call(firstWord, firstChart => {
    [].forEach.call(secondWord, secondChart => {
      if (firstChart === secondChart && !similars.includes(secondChart)) {
        similars.push(firstChart)
      }
    })
  })
  return (similars.length / (firstWord.length + secondWord.length)) * 100
}
// console.log(`${synonymizer('Ruslanaaasaadqweqsdaaaaaa', 'Ruslanqq')}`)

// Create calculator
function calc (operation) {
  if (!operation.match(/^[\d]+([.][\d]+)? *[\/*+\-] *[\d]+([.][\d]+)?$/)) {
    return `${operation} is not valid!`
  }
  operation.replace(/ /g, '')
  const operandRegexp = /[+\/\-*]/
  const operand = operation[operation.search(operandRegexp)]
  const operators = operation.split(operandRegexp)
  let result = 0
  switch (operand) {
    case '+':
      result = +operators[0] + +operators[1]
      break
    case '-':
      result = +operators[0] - +operators[1]
      break
    case '*':
      result = +operators[0] * +operators[1]
      break
    case '/':
      result = +operators[0] / +operators[1]
      break
    default:
      break
  }
  return result
}
// console.log(calc('12.2   / 5')) // => 2.4
