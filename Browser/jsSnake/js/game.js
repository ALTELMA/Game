var JS_SNAKE = {};

JS_SNAKE.game = (function () {

	var ctx;
	var xPosition = 0;
	var yPosition = 0;
	var frameLength = 500;

	function init() {
		$('body').append('<canvas id="jsSnake">');
		var $canvas = $('#jsSnake');
		$canvas.attr('width',"500");
		$canvas.attr('height',"500");
		var canvas = $canvas[0];
		ctx = canvas.getContext('2d');
		gameLoop();
	}

	function gameLoop(){
		xPosition += 2;
		//yPosition += 4;
		console.log(xPosition,yPosition);
		ctx.clearRect(0,0,500,500);
		ctx.fillStyle = "#ccc";
		ctx.fillRect(xPosition,yPosition,30,50);
		//setTimeout(gameLoop,frameLength);
	}

	return {
		init: init
	};

})();

$(document).ready(function(){
	JS_SNAKE.game.init();
});