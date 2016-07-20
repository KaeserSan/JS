function add(input){
	var lista = input.split(',');
	var result = 0;
	for (var i = 0; i<lista.length;i++){
		result += parseInt(lista[i],10);
	}
	return result;
}