function swapCase(argument) {
	var result = "";
	var isUpperCase = /[A-Z]/;
	var isLowerCase = /[a-z]/;
	for (var i in argument){
		if (isLowerCase.test(argument[i])) {
			result += argument[i].toUpperCase();
		} else if (isUpperCase.test(argument[i])) {
			result += argument[i].toLowerCase();
		} else {
			result += argument[i];
		}

	}
	return result;
}

console.log(swapCase('The Quick Brown Fox'));