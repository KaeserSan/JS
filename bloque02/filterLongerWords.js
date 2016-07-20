function filterLongerWords(palabras, largo){
	var salida=[];
	for (var i=0; i<palabras.length;i++){
		if (palabras[i].length > largo){
			salida.push(palabras[i]);
		}
	}
	return salida;
}