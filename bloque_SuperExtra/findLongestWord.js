function findLongestWord(input){
	var lista = input.split(" ");
	var palabra="";
	for (var i in lista){
		if (lista[i].length > palabra.length) {
			palabra = lista[i];
		}
	}
	return palabra;
}