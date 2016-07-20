function rockPaperScissors(player1, player2) {

	var valuesGames = ['PAPER', 'ROCK', 'SCISSORS'];
	var result = '';

	if (!player2) {
		var randomNumber = Math.floor((Math.random() * 3 ) + 1);
		player2 = valuesGames[randomNumber - 1];
	}

	if (player1 == player2) {
		result = 'TIE';
	} else {
		if ((player1 === "PAPER" 	&& player2 === "ROCK") ||
			(player1 === "ROCK" 	&& player2 === "SCISSORS") ||
			(player1 === "SCISSORS" && player2 === "PAPER"))	{
			result = player1 + " WINS";
		}
		else {
			result = player2 + " WINS";
		}
	}
	return result;
}

//other versions

	// for (var i = 0; i < valuesGames.length; i++){
	// 	if (player1 == valuesGames[i]) player1 = i;
	// 	if (player2 == valuesGames[i]) player2 = i;
	// }


	// if (player1 == player2) {
	// 	result = 'TIE';
	// } else { 
 //    	if (player1 < player2) {
 //    		result = valuesGames[player2] +  'WINS';
 //    	} else
 //    		result = valuesGames[player1] +  'WINS';
	// }


	// [['PAPER', 'PAPER', 'TIE'],
	// ['PAPER','SCISSORS','SCISSORS WINS'],
	// ['PAPER','ROCK','PAPER WINS'],
	// ['SCISSORS', 'SCISSORS', 'TIE'],
	// ['SCISSORS','PAPER','SCISSORS WINS'],
	// ['SCISSORS','ROCK','ROCK WINS'],
	// ['ROCK', 'ROCK', 'TIE'],
	// ['ROCK','SCISSORS','ROCK WINS'],
	// ['ROCK','PAPER','PAPER WINS']]

