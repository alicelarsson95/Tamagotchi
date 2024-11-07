let energyLevel = 100;
let happinessLevel = 100;
let hungerLevel = 100;
const tamagotchiStates = document.querySelectorAll(".tamagotchi-img");;
tamagotchiStates.forEach(state => {
    state.style.display = 'none' 
});

let displayTamagotchi = document.querySelector('.tamagotchi-display')
const displayStats = document.querySelector('.tamagotchi-display--levels')


const sleepButton = document.querySelector('.tamagotchi_button--sleep')
const feedButton = document.querySelector('.tamagotchi_button--eat')
const playButton = document.querySelector('.tamagotchi_button--play')
const startButton = document.querySelector('.start-button')
const resetButton = document.querySelector('.reset-button')

const hatchText = document.querySelector('.hatch-text'); 
const eggImage = document.querySelector('.tamagotchi-img--egg');

startButton.addEventListener('click', function() {
    tamagotchiStates[4].style.display = 'block';
    hatchText.innerText = 'Hatching..';
    eggImage.classList.add('shake');
    setTimeout(() => {
        eggImage.classList.remove('shake');
    }, 5000);
    setTimeout(startTamagotchi, 5000);

    startButton.disabled = true;
   
    sleepButton.addEventListener('click', sleepTamagotchi)
    feedButton.addEventListener('click', feedTamagotchi)
    playButton.addEventListener('click', playWithTamagotchi)
})

function startTamagotchi() {
    tamagotchiStates[4].style.display = 'none'
    tamagotchiStates[0].style.display = 'block'
    hatchText.innerText = "Bikkjen has hatched!"
    
    
    setTimeout(clearText, 2000)
    
    countDownLevels()
}

function clearText() {
    hatchText.innerText = ''
}

function countDownLevels() {
 levels = setInterval(() => {
    energyLevel -=2
    hungerLevel -=1.5
    happinessLevel --

    

    if (energyLevel <= 0 || happinessLevel <= 0 || hungerLevel <= 0){
        tamagotchiStates[3].style.display = 'none'
        tamagotchiStates[1].style.display = 'block'

        clearInterval(levels)
        hatchText.innerText = "Bikkjen has died :("

        displayTamagotchi.style.background = '#b60101';
        displayTamagotchi.style.background = '-webkit-linear-gradient(to top, #b60101, rgb(238, 85, 58))';  
        displayTamagotchi.style.background = 'linear-gradient(to top, #b60101, rgb(238, 85, 58))';
        } else if (energyLevel <= 10 || happinessLevel <= 10 || hungerLevel <= 10) {
          displayTamagotchi.style.background = '#e60000';
          displayTamagotchi.style.background = '-webkit-linear-gradient(to top, #e60000, rgb(240, 96, 71))';  
          displayTamagotchi.style.background = 'linear-gradient(to top, #e60000, rgb(240, 96, 71))';
        } else if (energyLevel <= 20 || happinessLevel <= 20 || hungerLevel <= 20) {
          displayTamagotchi.style.background = '#e50000';
          displayTamagotchi.style.background = '-webkit-linear-gradient(to top, #e50000, rgb(243, 134, 115))';  
          displayTamagotchi.style.background = 'linear-gradient(to top, #e50000, rgb(243, 134, 115))';
        } else if (energyLevel <= 30 || happinessLevel <= 30 || hungerLevel <= 30) {
          tamagotchiStates[0].style.display = 'none'
          tamagotchiStates[3].style.display = 'block'
          displayTamagotchi.style.background = '#e42e00';
          displayTamagotchi.style.background = '-webkit-linear-gradient(to top, #e42e00, rgb(248, 189, 178))';  
          displayTamagotchi.style.background = 'linear-gradient(to top, #e42e00, rgb(248, 189, 178))';
        } else if (energyLevel <= 40 || happinessLevel <= 40 || hungerLevel <= 40) {
            displayTamagotchi.style.background = '#db6c22';
            displayTamagotchi.style.background = '-webkit-linear-gradient(to top, #db6c22, rgb(245, 202, 195))';  
            displayTamagotchi.style.background = 'linear-gradient(to top, #db6c22, rgb(245, 202, 195))';
        } else if (energyLevel <= 50 || happinessLevel <= 50 || hungerLevel <= 50) {
            displayTamagotchi.style.background = '#e6b492';
            displayTamagotchi.style.background = '-webkit-linear-gradient(to top,  #e6b492, #f2f8c6)';  
            displayTamagotchi.style.background = 'linear-gradient(to top, #e6b492, #f2f8c6)'; 
        } else {
            displayTamagotchi.style.background = '';
        }

        console.log('energi: ', energyLevel, 'lycka: ', happinessLevel, 'hunger: ', hungerLevel)
        //localstorage
 }, 400);
}

 
 function feedTamagotchi(){ 
    feedButton.removeEventListener('click', feedTamagotchi)
    feedButton.addEventListener('click', stopfeedingTamagotchi)
    sleepButton.disabled = true
    playButton.disabled = true

    clearInterval(levels)

    tamagotchiStates[0].style.display = 'none'
    tamagotchiStates[3].style.display = 'none'
    tamagotchiStates[5].style.display = 'block'

    eating = setInterval(() => {
        hungerLevel ++
        console.log('matpåfyllnad: ', hungerLevel);
        
        if(tamagotchiStates[5].style.display === 'block'){
            tamagotchiStates[5].style.display = 'none'
            tamagotchiStates[6].style.display = 'block'
            hatchText.innerHTML = 'nom'
        } else {
            tamagotchiStates[6].style.display = 'none'
            tamagotchiStates[5].style.display = 'block'
            hatchText.innerHTML = ''
        }

        if (hungerLevel >= 100) {
            stopfeedingTamagotchi()
        }
    }, 500);

}

function stopfeedingTamagotchi(){
    clearInterval(eating)
    hatchText.innerText = ''
    feedButton.removeEventListener('click', stopfeedingTamagotchi)
    feedButton.addEventListener('click', feedTamagotchi)
    sleepButton.disabled = false
    playButton.disabled = false

    tamagotchiStates[0].style.display = 'block' //if över 30 glad, else ledsen
    tamagotchiStates[5].style.display = 'none'
    tamagotchiStates[6].style.display = 'none'

    countDownLevels()

    
}

function sleepTamagotchi(){
    sleepButton.removeEventListener('click', sleepTamagotchi)
    sleepButton.addEventListener('click', awakenTamagotchi)
    feedButton.disabled = true
    playButton.disabled = true

    clearInterval(levels)

    tamagotchiStates[0].style.display = 'none'
    tamagotchiStates[3].style.display = 'none'
    tamagotchiStates[2].style.display = 'block'

    displayTamagotchi.style.background = '#080f6d';
    displayTamagotchi.style.background = '-webkit-linear-gradient(to top, #2933bb, #080f6d)';  
    displayTamagotchi.style.background = 'linear-gradient(to top, #2933bb, #080f6d)'; 

    energy = setInterval(() => {
        energyLevel ++

        console.log('energipåfyllnad: ', energyLevel);
        

        if (hatchText.innerText.length < 5){
            hatchText.innerText += ' z'
        } else if (hatchText.innerText.length >= 5) {
            hatchText.innerText = ''
        }

        if (energyLevel == 100) {
            awakenTamagotchi()
        }
        //localstorage?
    }, 1000);
}

function awakenTamagotchi() {
    clearInterval(energy)
    hatchText.innerText = ''
    sleepButton.removeEventListener('click', awakenTamagotchi)
    sleepButton.addEventListener('click', sleepTamagotchi)
    feedButton.disabled = false
    playButton.disabled = false

    tamagotchiStates[0].style.display = 'block' //if över 30 glad, else ledsen
    tamagotchiStates[2].style.display = 'none'
    displayTamagotchi.style.background = ''

    countDownLevels()
}


function playWithTamagotchi(){
    playButton.removeEventListener('click', playWithTamagotchi)
    playButton.addEventListener('click', stopPlayingWithTamagotchi)
    feedButton.disabled = true
    sleepButton.disabled = true

    clearInterval(levels)
    
    tamagotchiStates[3].style.display = 'none'
    tamagotchiStates[0].style.display = 'block'
    tamagotchiStates[7].style.display = 'block'



}

function stopPlayingWithTamagotchi(){

}


function changeTamagotchiColor(){

}

function resetTamagotchi(){
}
