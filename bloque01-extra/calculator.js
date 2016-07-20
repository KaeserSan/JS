function calculator(operacion, num1, num2){
	switch (operacion){
		case "suma":
			return num1 + num2;
			break;
		case "resta":
			return num1 - num2;
			break;
		case "multiplicacion":
			return num1 * num2;
			break;
		case "division":
			return num1 / num2;
			break;
		default:
			return "Error en la operacion."
	}
}