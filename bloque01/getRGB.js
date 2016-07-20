function getRGB(color){
	var colorRojo = parseInt(color.slice(1,3), 16);
	var colorVerde = parseInt(color.slice(3,5),16);
	var colorAzul = parseInt(color.slice(5,7),16);
	console.log("rgb(" + colorRojo + ", " + colorVerde + ", " + colorAzul + ")");
}