function first( input, numElements ){
	var result = [];
	var counter = 0;
	if (numElements === undefined ){
		result.push(input[0]);
	} else {
		for (var i in input){
			if (i < numElements) {result.push(input[i]);}
		}
	}
	return result;
}