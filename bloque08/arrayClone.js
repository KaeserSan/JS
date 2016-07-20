function arrayClone ( input ) {
	var result = [];
	for (var i in input){
		result.push(input[i]);
	}
	return result;

}