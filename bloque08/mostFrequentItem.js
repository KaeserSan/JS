function mostFrequentItem( input ) {
	var obj = {};
	var max = 0;
	var letraMax = "";
	for (var i = 0; i < input.length; i++) {

		if (obj[input[i]] === undefined){
			obj[input[i]] = 1;
		} else {
			obj[input[i]]++;
		}
	}
	b = Object.keys(obj).slice();
	for (var i =0; i< b.length; i++) {
		//console.log(b[i]); 
		/*console.log('--');
		console.log(obj[b[i]]);*/
		if (obj[b[i]] > max) {
			max = obj[b[i]];
			letraMax = b[i];

		}
	}
	return letraMax + " ( " + max + " times )";
}


console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));