function sum(){
	var suma=0;
	for (var i=0; i< arguments.length; i++){
		suma += arguments[i];
	}
	return suma;
}