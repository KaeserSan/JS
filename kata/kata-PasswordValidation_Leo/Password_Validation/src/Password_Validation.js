
	function Password_Validation(passWord) {
		var countNum = 0;
		var flag = {upper:false, numbers:false, special:false, length10:false};
		for (var i = 0; i < passWord.length; i++) {
		
			if ( 'ABCDEFGHIJKLMNOPQRSTUVWXYZÑ'.indexOf(passWord[i]) !== -1 ) flag.upper = true;
		
			if ( !isNaN(passWord[i] )) {
				countNum++;
				if ( countNum > 1 ) flag.numbers = true;
			}
		
			if ( '$#%&-!?'.indexOf(passWord[i]) !== -1 ) flag.special = true;

			if ( passWord.length >= 10) flag.length10 = true;
		}

		if (flag.upper === true && flag.numbers === true && flag.special === true && flag.length10 === true ) {
			return true;
		} else {
			return false;
		}
	}
