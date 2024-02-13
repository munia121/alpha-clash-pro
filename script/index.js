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


      

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
}