function fibonacci(num){
	var result = 0;
	var count = 2;
	var num1 = 0;
	var num2 = 1;
	if (num===1) {return 0;}
	else if (num===2) {return 1;}

	fibR(num1, num2);

	function fibR(num1, num2){
		result = num1 + num2;
		num1 = num2;
		num2 = result;
		count ++
		if (count < num) {
			fibR(num1, num2)
		}
	}
	return result;
}


// 1 2 3 4 5 6 7  8  9 10
// 0 1 1 2 3 5 8 13 21 34 