function charFreq(cadena){
	var caracteres = [];
	var veces = [];
	// Encontrar valores unicos
	var encontrado = false;
	for (var i=0;i<cadena.length;i++){
		encontrado = false;
		for (var ii=0; ii<caracteres.length;ii++){
			if (caracteres[ii] === cadena[i]){
				encontrado = true;
			}
		}
		if (encontrado){
			for(var iii=0; iii<caracteres.length; iii++){
				if (caracteres[iii] === cadena[i]){
					veces[iii]++;
				}
			}
		} else {
			caracteres.push(cadena[i]);
			veces.push(1);
		}
	}

	var result = [];
	for (i = 0; i < caracteres.length; i++){
		result.push(caracteres[i]+": " + veces[i]);
	}

	/*console.log(caracteres);
	console.log(veces);*/P

	console.log(result);
}

