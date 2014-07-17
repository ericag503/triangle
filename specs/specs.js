describe("triangle", function() {
	it('determines whether the lengths create a valid triangle', function(){
		triangle(2,2,8).should.equal("Not a Triangle");
	});
	it('will return a "equilateral" triangle if all sides are equal', function() {
		triangle(2,2,2).should.equal("equilateral");
	});
	it('will return a "isoceles" triangle if two sides are equal', function() {
		triangle(3,3,4).should.equal("isoceles");
	})
	it('it will return a "scalene" triangle if none of the sides are equal', function() {
		triangle(2,3,4).should.equal("scalene");
	});
});