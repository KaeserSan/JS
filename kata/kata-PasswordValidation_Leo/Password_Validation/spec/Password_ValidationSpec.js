//https://github.com/juanmaguitar/exercises-katas-js/tree/master/PasswordValidation

describe("function Password_Validation that ", function() {

    it("should exist", function(){
        expect( Password_Validation ).toBeDefined();
    });

		it("should return a Boolean ", function() {
      var result = Password_Validation('4rt5');
      expect( typeof(result) ).toBe( 'boolean' );
    });

    it("should return 'FALSE' when Password not meets requirements ('4rtd') ", function() {
      var result = Password_Validation('4rtd');
      expect( result ).toBe( false );
    });

    it("should return 'TRUE' when Password meets all requirements ('rtgfdF!45fdffdfgd') ", function() {
      var result = Password_Validation('rtgfdF!45fdffdfgd');
      expect( result ).toBe( true );
    });

});