function myPow (value, n) {
	if (value < 100 && value > -100 && Number.isInteger(n)) {
		if (!n) {
			return 1
		} else {
			let res = 1
			for (let i = 0; i < Math.abs(n); i++) {
				res *= value
			}
			return n > 0 ? res.toFixed(5) : (1 / res).toFixed(5)
		}
	} else {
		return 'Values is not valid'
	}
}

console.log(myPow(2.00000, 10))
console.log(myPow(2.10000, 3))
console.log(myPow(-2.00000, -3), Math.pow(-2, -3))
console.log(myPow(-2.00000, 3), Math.pow(-2, 3))
console.log(myPow('2.00000', -2))
console.log(myPow(-2.00000, '-2'))
console.log(myPow(-2.00000, 16))
