function onClick()
	{
var amountCorrect = 0;
	for(var i = 1; i <= 10; i++) {
		var radios = document.getElementsByName('q' + i);
		for(var j = 0; j < radios.length; j++) {
			var radio = radios[j];
			if(radio.value == "yes" && radio.checked) {
				amountCorrect++;
			}
		}
	}
		alert("Your Score: " + amountCorrect + "/10");
	}
var submission = document.querySelector('button')
submission.addEventListener('click', onClick)