function joinElements ( input ){
	var result1 = input.toString();
	var result2 = input.join(",");
	var result3 = input.join('+');
	return result1 + "\n"+result2 + "\n"+result3; 
}




console.log(joinElements (["Red", "Green", "White", "Black"]));