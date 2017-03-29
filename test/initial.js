var expect = require("chai").expect;

describe("First test", function(){
	describe("test body", function(){
		it("does something", function(){
			console.log('test');
			expect("00").to.equal('00')
		})
	})
});
