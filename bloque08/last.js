function last( input, numElements ){
	var result = [];
	var counter = 0;
	if (numElements === undefined ){
		result.push(input[input.length-1]);
	} else {
		for (var i=input.length-1; i>=0; i--){
			if (result.length < numElements) {result.push(input[i]);}
		}
	}
	return result;
}