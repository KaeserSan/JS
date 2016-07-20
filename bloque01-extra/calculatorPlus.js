function calculatorPlus(){
	var result;
	switch (arguments[0]){
		case "suma":
			result = 0;
			for (var i = 1; i < arguments.length; i++){
				result += arguments[i];
			}
			break;
		case "resta":
			result = arguments[1];
			for (var i = 2; i < arguments.length; i++){
				result -= arguments[i];
			}
			break;
		case "multiplicacion":
			result = 1;
			for (var i = 1; i < arguments.length; i++){
				result *= arguments[i];
			}
			break;
		case "division":
			result = arguments[1];
			for (var i = 2; i < arguments.length; i++){
				result /= arguments[i];
			}
			break;
		default:
			return "Error en la operacion."
	}
	return result;

}