function findLongestWord(palabras){
	var palabra="";
	for (var i=0; i<palabras.length;i++){
		if (palabras[i].length > palabra.length) {
			palabra = palabras[i];
		}
	}
	return palabra;
}