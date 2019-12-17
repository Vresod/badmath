// 4 * 3
// 4 + 4 + 4
// 12

function multiply(n1, n2) {
	let n3 = n1;
	for (let i = 1; i < n2; i++) {
		n1 += n3;
	}
	return n1;
}
exports.multiply = multiply;