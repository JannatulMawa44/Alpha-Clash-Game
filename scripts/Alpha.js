// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }



//kon key tak press kortsi ta jnte pri
function handleKeyboardKey(event)
{
   const playerPressd = event.key;
   console.log('player pressed', playerPressd)

   //stop the game if pressed Esc
   if(playerPressd === 'Escape'){
      gameOver();
  }


   //jeta press korsi seta dekhabe
   //get the expected to press

   const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText;
   const expectedAlphabed = currentAlphabet.toLowerCase();
   console.log(playerPressd,expectedAlphabed);

  /// check match or not
  if(playerPressd === expectedAlphabed){
   console.log('you get a point');

   const currentScore = getTextElementValueById('current-score');
   const updateScore = currentScore + 1;
   setTextElementValueById('current-score', updateScore);







  //....................................................
   //update score:
   //1. get the current score
   // const currentScoreElement = document.getElementById('current-score');
   // const currentScoreText = currentScoreElement.innerText;
   // const currentScore = parseInt(currentScoreText);
   // console.log(currentScore);

   



   //2.increase the score by 1
   const newScore = currentScore + 1;

   //3. show the update  score

   //currentScoreElement.innerText = newScore;


    //start a new round
   removeBackgroundColorById(expectedAlphabed);
   continueGame();
  }
 else {
   console.log('you missed.you lost a life');
   //1. get the current life number
   // const currentLifeElement = document.getElementById('current-life');
   // const currentLifeText = currentLifeElement.innerText;
   // const currentLife = parseInt(currentLifeText);

   const currentLife = getTextElementValueById('current-life');
   const updateLife = currentLife - 1;
   setTextElementValueById('current-life', updateLife);

   if(updateLife ===0){
      gameOver();
   }



    //..........................................
   //2. reduce thr life count
  // const newLife = currentLife - 1;

   //2.display the update life count
   //currentLifeElement.innerText = newLife;
 }

}
document.addEventListener('keyup',handleKeyboardKey);





function continueGame(){
   // step -1: generate a random alphabet
   const alphabet = getARandomAlphabet();
   //console.log('your random alphabet', alphabet);

   // set randomly generated alphabet to the screen (show it)
   const currentAlphabetElement = document.getElementById('current-alphabet');
   currentAlphabetElement.innerText = alphabet;

   // set background color
   setBackgroundColorById(alphabet);
}

function play(){
   //hide everything show only the playground
   hideElementById('home-screen');
   hideElementById('final-score');
   showElementById('play-ground');


  //reset score and life
  setTextElementValueById('current-life',5);
   setTextElementValueById('current-score',0)


   continueGame();
}



function gameOver()
{
   hideElementById('play-ground');
   showElementById('final-score');

   //update final score
   //1.get the final score
   const lastScore = getTextElementValueById('current-score');
   console.log(lastScore);
   setTextElementValueById('last-score',lastScore)

   //clear the last selected alphabet highlight
   const currentAlphabet = getTextElementTextById('current-alphabet');
   //console.log(currentAlphabet)
   removeBackgroundColorById(currentAlphabet);

}