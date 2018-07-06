function mergeSort(arr) {
	var len = arr.length;
	if (len < 2) return arr;
	var middle = Math.floor(len / 2);
	var left = arr.slice(0, middle);
	var right = arr.slice(middle);


	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	var result = [];
	console.log('left', left);
	console.log('right', right);
	while(left.length && right.length) {
		if (left[0] % 2 !== 0) {
			result.push(left.shift())
		} else {
			result.push(right.shift())
		}
	}
	return result.concat(left, right);
}


var a = [3,7,6,4, 1, 3];
console.log(mergeSort(a));

console.log('???');