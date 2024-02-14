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


function continueGame(){
    // set-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet',alphabet);

    // set randomly generated alphabet to the screen (show it)
    const cureentAlphabet = document.getElementById('cureent-alphabet')
    cureentAlphabet.innerText = alphabet;


    // set background color key bod 
    setBackgroundColorById(alphabet);


}

      

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}