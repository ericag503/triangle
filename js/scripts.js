var triangle = function(side1, side2, side3) {
	var sides = [side1, side2, side3]

  if(sides[0] + sides[1] <= sides[2]) {
  	return "Not a Triangle";
  } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
  	return "equilateral";
  } else if (sides[0] === sides[1]) {
  	return "isoceles";
  } else if (sides[0] !== sides[1] !== sides[2]) {
  	return "scalene";
  }
};

$(document).ready(function() {
	$("form#triangle").submit(function(event) {

		var side1 = parseInt($('input#side1').val());
		var side2 = parseInt($('input#side2').val());
		var side3 = parseInt($('input#side3').val());
		var result = triangle(side1, side2, side3);

		$(".type").text(result);
		$("#result").show();
		event.preventDefault();
	});
});