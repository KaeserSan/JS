function isArray( input ){
	var tipoCostructor = String(input.constructor);
	if (tipoCostructor.indexOf("Array") !== -1) {
		return "Es array.";
	} else {
		return "No es array."
	}

}