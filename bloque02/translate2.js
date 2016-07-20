function translate2(cadena){
	var cadenaTemp = cadena.split(" ");
	var salida = "";
	for (var i in cadenaTemp){
		switch (cadenaTemp[i]) {
		case "merry":
			salida += "god";
			break;
		case "christmas":
			salida += "jul";
			break;
		case "and":
			salida += "och";
			break;
		case "happy":
			salida += "gott";
			break;
		case "new":
			salida += "nytt";
			break;
		case "year":
			salida += "ar";
			break;
		}
		salida += " ";
	}
	return salida;
}