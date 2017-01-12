function ScoreUI(htmlSelector, numberSize, startingNumber) {
	this.htmlSelector = htmlSelector;
	this.numberSize = numberSize;
	this.startingNumber = startingNumber;
};

function scoreCounter(htmlSelector, idSelector, numberSize, startingNumber) {
	this.htmlSelector = htmlSelector;
	this.idSelector = idSelector;
	this.numberSize = numberSize;
	this.startingNumber = startingNumber;
	var number = document.querySelector(idSelector + ".value");
	number.value = startingNumber;
	this.up = function() {
		number.value = parseInt(number.value) + 1;
		if (number.value.toString().length > numberSize) {
			number.value -= 1;
			alert("You can not exceed the maximum number length: " + numberSize);
		}
	}
	this.down = function() {
		number.value = parseInt(number.value) - 1;
		if (number.value < 0) {
			number.value = 0;
			alert("Value of the counter can not be less than 0!");
		}
	}
	this.get = function() {
		tempNumber = parseInt(number.value);
		alert(tempNumber);
	}
	this.set = function() {
		var setValue = prompt("Write the value You would like to set:");
		number.value = setValue;
		if (number.value.toString().length > numberSize) {
			alert("Value was too big! Write another one.");
			this.set();
		}
	}
	this.reset = function() {
		number.value = 0;
	}
	$('input.value').on('input',function(e){
		if (number.value.toString().length > numberSize) {
			number.value = 0;
		}
	});
};