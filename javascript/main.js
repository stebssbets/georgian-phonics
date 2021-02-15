var arrayOfAllCheckboxes = document.getElementsByClassName('lettersToPracticeCheckbox');
var arrayOfAllSubmitButtons = document.getElementsByClassName('submitButton');

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var checkboxClickFunction = function handleCheckBoxClick(e)
{
	//if (e.target || e.srcElement)
	e.stopPropagation();
	console.log(e.currentTarget.type);
	// if (buttonWasJustPressed)
	// {
	// 	return;
	// }

	
	if (this.checked === false)
	{
		console.log("inside unchecked checkbox check");
		for (let i = 0; i < arrayOfAllSubmitButtons.length; i++)
		{
			if (this.value == arrayOfAllSubmitButtons[i].value)
			{
				arrayOfAllSubmitButtons[i].style.visibility = 'hidden';
			}
		}

		for (let i = 0; i < arrayOfCurrentPossibleAudioLetters.length; i++)
		{
			if (this.value == arrayOfCurrentPossibleAudioLetters[i].name)
			{
				arrayOfCurrentPossibleAudioLetters.splice(i,1);
				return;
			}//end of removing possible audio letters
		}//end of populating current possible audio letters array
	}
	else if (this.checked === true)
	{
		for (let i = 0; i < arrayOfAllSubmitButtons.length; i++)
		{
			if (this.value == arrayOfAllSubmitButtons[i].value)
			{
				arrayOfAllSubmitButtons[i].style.visibility = 'visible';
				arrayOfCurrentPossibleAudioLetters.push(arrayOfAllAudioLetters[i]);
			}//end of turning on submit button visibility and adding audio letter to possible prompts array
		}
	}
}//end of handleCheckBoxClick

var buttonWasJustPressed = false;
var handleSubmitButtonFunction = function handleSubmitButton(e) 
{
	e.stopPropagation();
	console.log(e.currentTarget.type);
	console.log('this from submit button: ' + this);
	if (this.value == currentCorrectAudioLetter.name)
	{
		georgianYes.play();
		alert("Yes");
	}
	else
	{
		georgianNo.play();
		alert("No");
	}
}

for (let i = 0; i < arrayOfAllSubmitButtons.length; i++)
{
	arrayOfAllSubmitButtons[i].onclick = handleSubmitButtonFunction;
}

for (let i = 0; i < arrayOfAllCheckboxes.length; i++)
{
	arrayOfAllCheckboxes[i].onclick = checkboxClickFunction;
}//end of for loop to assign onclick functions to checkboxes

var currentCorrectAudioLetter = undefined;

function handlePlayButtonClick()
{
	randomAudioLetterIndex = getRndInteger(0, arrayOfCurrentPossibleAudioLetters.length - 1);
	
	currentCorrectAudioLetter = arrayOfCurrentPossibleAudioLetters[randomAudioLetterIndex];
	console.log('currentCorrectAudioLetter: ' + currentCorrectAudioLetter);
	console.log('currentCorrectAudioLetter.name: ' + currentCorrectAudioLetter.name);

	currentCorrectAudioLetter.play();
}