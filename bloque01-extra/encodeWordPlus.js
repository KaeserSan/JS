function encodeWordPlus(cadena){
	var salida = ""
	for (var i=0; i<cadena.length; i++){
		if ((i > 0) && ( i % 7 === 0)) {
			salida += Math.floor((Math.random() * 1000) + 1); 
		}
		
		switch (cadena[i]) {
			case 'T':
				salida += "7";
				break;
			case 'A':
				salida += "4";
				break;
			case 'S':
				salida += "5";
				break;
			case 'O':
				salida += "0";
				break;
			default:
				salida += cadena[i];
		}
	
	}
	return salida;
}