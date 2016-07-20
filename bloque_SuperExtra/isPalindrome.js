function isPalindrome(input){
	var cadena = "";
	// Invertimos input
	for (var i = input.length-1; i>=0; i--){
		cadena += input[i];
	}
	//console.log("Original: " + input + " - invertida: " + cadena )
	//Comparamos ambas cadenas
	for (i=0; i<input.length;i++){
		if (input[i] !== cadena[i]) { return "No es palindromo."}
	}
	return "Es palindromo."
}