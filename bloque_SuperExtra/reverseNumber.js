function reverseNumber(input){
	var cadena = input.toString();
	var result = "";
	for (var i = cadena.length-1; i>=0; i--){
		result += cadena[i];
	}
	return parseInt(result, 10);
}