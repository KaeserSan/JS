function separateEven( input ) {
	var input = input.toString();
	console.log(input);
	var counter = false;
	var result = "";
	for (var i = 0 ; i < input.length;i++ ){
		if (i%2 && counter){
			result += '-';
		}
		result += input[i];
		counter = !counter;

	}
	return result;
}


console.log(separateEven(125468));