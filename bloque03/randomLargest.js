function randomLargest(){
	var numero = Math.floor((Math.random() * 100) + 1);
	console.log("Numero1: "+numero);
	for (var i=0; i<2; i++){
		numero2 = Math.floor((Math.random() * 1000) + 1);
		console.log("Numero"+i+2+": " + numero2);
		if (numero2 > numero) { numero = numero2;}
	}
	return "El mas grande es: " +numero;
}