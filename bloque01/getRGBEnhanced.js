function getRGBEnhanced(color){
	var colorRojo = parseInt(color.slice(1,3), 16);
	var colorVerde = parseInt(color.slice(3,5),16);
	var colorAzul = parseInt(color.slice(5,7),16);
	cadenaColor = "(" + colorRojo + ", " + colorVerde + ", " + colorAzul + ")";
	if (cadenaColor === "(0, 0, 0)") {
		cadenaColor += " negro"
	} else 	if (cadenaColor === "(255, 255, 255)") {
		cadenaColor += " blanco"
	} else if (cadenaColor === "(255, 0, 0)") {
		cadenaColor += " rojo"
	} else 	if (cadenaColor === "(0, 255, 0)") {
		cadenaColor += " verde"
	} else 	if (cadenaColor === "(0, 0, 255)") {
		cadenaColor += " azul"
	} 

	console.log("rgb" + cadenaColor );
}