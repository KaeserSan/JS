function multiplos23(){
	var cadena = "Elements: ";
	var suma=0;
	for (var i=23; i<500; i+=23){
		cadena += i + " ";
		suma += i;
	}
	console.log(cadena);
	console.log("Suma: "+suma);
}