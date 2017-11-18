var randomNumber;
var win = 0;
var loss = 0;
var priorNum = 0;

var images = ['https://openclipart.org/image/2400px/svg_to_png/149149/crystals.png',
			  'https://cdn.pixabay.com/photo/2014/12/21/23/52/red-576239_960_720.png',
			  'https://cdn4.iconfinder.com/data/icons/free-crystal-icons/512/Emerald.png',
			  'https://vignette.wikia.nocookie.net/bejeweled/images/7/7c/Rising_Star.png/revision/latest?cb=20160619045016'
];


var startGame = function () {
	$(".crystals").empty();
	//generate random number to start the game between 19 & 120
	randomNumber = Math.floor(Math.random() * 101) + 19;
	console.log(randomNumber);//test the random number generator



	//starting number to match
	$(".matchNumber").html('Match This Number: ' + randomNumber);

	

	for (var i=0; i < 4; i++) {

		 var random = Math.floor(Math.random() * 11) + 1;
		 console.log(random);//test random number generation for crystals
		 //assign numbers to crystals 
		 var crystal = $("<div>");
		 	crystal.attr({
		 		"class":'crystal',
		 		"data-random":random
		 	});
		 	crystal.css({
		 		"background-image":"url('" + images[i] + "')",
		 		"background-size":"cover",
		 	});
				
		 $(".crystals").append(crystal);
	}
	$('#priorNum').html("Total Score: " + priorNum);

}

startGame();

$(document).on('click', ".crystal", function () {

//test number consistency within crystals
	var num = parseInt($(this).attr('data-random'));
	
	priorNum += num;//tracks the number totals per click
	console.log(priorNum);
	
	$('#priorNum').html("Total Score: " + priorNum);

	if (priorNum > randomNumber) {
		loss++;
		
		$('#lost').html("Games Lost:  " + loss);
		console.log('You lost');

		priorNum = 0;
		
		
		startGame();
	}



	else if (priorNum === randomNumber) {
		win++;
		
		$('#win').html("Games Won:  " + win);
		console.log('You win');

		priorNum = 0;
		

		startGame();
	}
});