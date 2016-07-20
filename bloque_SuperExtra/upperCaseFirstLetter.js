function upperCaseFirstLetter(input){
	var result = "";
	for (var i=0; i<input.length;i++){
		if (i===0 || input[i-1]===" ") {
			result += input[i].toUpperCase();
		}
		else {
			result += input[i];
		}
	}
	return result;
}