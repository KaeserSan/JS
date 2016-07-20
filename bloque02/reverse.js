function reverse(cadena){
	salida="";
	for (var i=cadena.length-1; i>=0; i--){
		salida += cadena[i];
	}
	return salida;
}