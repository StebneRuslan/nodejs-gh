const link = '(2 -> 4 -> 3 -> 5 -> 7) + (4->5 -> 6 -> 4)'

function calc (link) {
  const operands = link.replace(/[()\s\->]/g, '').split('').reverse().join('').split('+')
  console.log(`${+operands[0]} + ${+operands[1]} = ${+operands[0] + +operands[1]}`)
  return (+operands[0] + +operands[1]).toString().split('').reverse().join(' -> ')
}

console.log(calc(link))
