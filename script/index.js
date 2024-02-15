// function play(){
//     //step-1: hide the home screen.
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)


//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
//     // console.log(playgroundSection)
// }



function handleKeyBoardButtonPress(event){
    const playerPress = event.key;
    console.log('player pressed',playerPress);

    // stop the game if pressed 'Esc'
    if(playerPress === 'Escape'){
        gameOver();
    }


    // get expected to press
    const currentAlphabetElement = document.getElementById('cureent-alphabet');

    const currentAlphabet = currentAlphabetElement.innerText;
    const expactedAlphabet = currentAlphabet.toLowerCase();
    console.log(expactedAlphabet,playerPress);

    // checked  matched or not
    if(playerPress === expactedAlphabet){
        console.log('win')

        const cureentScore = getTextElementById('cureent-score')
        console.log(cureentScore);
        const updatedScore = cureentScore + 1;
        setTextElementValueById('cureent-score', updatedScore);






        // ------------------------------------
        // update score:
        // 1.get the current score
        // const cureentElementScore = document.getElementById('cureent-score');
        // const cureentScoreText = cureentElementScore.innerText;
        // const cureentScore = parseInt(cureentScoreText)
        // console.log(cureentScore);


        // // 2.increase the score by 1
        // const newScore = cureentScore + 1;


        // // 3.show the update score
        // cureentElementScore.innerText = newScore;

        // start a new round
        removeBackgroundById(expactedAlphabet);
        continueGame()
    }
    else{
        console.log('missed')

        const cureentLife = getTextElementById('cureent-life');
        const updatedLife = cureentLife - 1;
        setTextElementValueById('cureent-life',updatedLife);

        if(updatedLife === 0){
            gameOver()
        }



        // ---------------------------
        // set-1: get the current life number
        // const currentLifeElement = document.getElementById('cureent-life')
        // const cureentLifeText = currentLifeElement.innerText;
        // const cureentLife = parseInt(cureentLifeText)

        // // step-2: reduce the life count
        // const newLife = cureentLife - 1;

        // // step-3: display the update life count
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup',handleKeyBoardButtonPress)






function continueGame(){
    // set-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('your random alphabet',alphabet);

    // set randomly generated alphabet to the screen (show it)
    const cureentAlphabet = document.getElementById('cureent-alphabet')
    cureentAlphabet.innerText = alphabet;


    // set background color key bod 
    setBackgroundColorById(alphabet);


}

      

function play(){
    // hide everything show only playground
    hideElementById('home-screen')
    showElementById('play-ground')
    hideElementById('final-score')

    // reset score and life
    setTextElementValueById('cureent-life', 5)
    setTextElementValueById('cureent-score', 0)

    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score

    const lastScore = getTextElementById('cureent-score');
    console.log('lastScore',lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const cureentAlphabet =  getElementTextById('cureent-alphabet');
    // console.log(cureentAlphabet);
    removeBackgroundById(currentAlphabet);
}