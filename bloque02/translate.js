function translate(cadena){
	var salida = "";
	for (var i = 0; i < cadena.length; i++){
		if ("aeiou ".indexOf(cadena[i]) !== -1 ){
			salida += cadena[i];
		} else {
			salida += cadena[i] + "o" + cadena[i];
		}
	}
	return salida;
}