//https://github.com/juanmaguitar/exercises-katas-js/tree/master/PasswordValidation

describe("function rockPaperScissors that ", function() {

    it("should exist", function(){
        expect( rockPaperScissors ).toBeDefined();
    });

    it("should return a String ", function() {
      var result = rockPaperScissors('PAPER');
      expect( typeof(result) ).toBe( 'string' );
    });

    it("should return 'PAPER WINS' when called rockPaperScissors('ROCK','PAPER') ", function() {
      var result = rockPaperScissors('ROCK','PAPER');
      expect( result ).toBe( 'PAPER WINS' );
    });

    it("should return 'SCISSORS WINS' when called rockPaperScissors('PAPER','SCISSORS') ", function() {
      var result = rockPaperScissors('PAPER','SCISSORS');
      expect( result ).toBe( 'SCISSORS WINS' );
    });

    it("should return 'TIE' when called rockPaperScissors('SCISSORS','SCISSORS') ", function() {
      var result = rockPaperScissors('SCISSORS','SCISSORS');
      expect( result ).toBe( 'TIE' );
    });

});