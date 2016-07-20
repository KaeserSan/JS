function howManyVowels(input){
	var vocales = [['a',0],['e',0],['i',0],['o',0],['u',0]]
	var result=0;
	for (var i=0; i<input.length;i++){
		for (var ii in vocales){
			if (vocales[ii][0] === input[i]){
				result ++;
			}
		}
	}
	return result;
}