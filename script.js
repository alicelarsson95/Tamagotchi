let energyLevel = 100;
let happinessLevel = 100;
let hungerLevel = 100;
const tamagotchiStates = document.querySelectorAll(".tamagotchi-img");;
tamagotchiStates.forEach(state => {
    state.style.display = 'none' 
});

let displayColor = document.querySelector('.tamagotchi-display')

const sleepButton = document.querySelector('.tamagotchi_button--sleep')
sleepButton.addEventListener('click', sleepTamagotchi)
const feedButton = document.querySelector('.tamagotchi_button--eat')
feedButton.addEventListener('click', function() {
    feedTamagotchi()
})
const playButton = document.querySelector('.tamagotchi_button--play')
playButton.addEventListener('click', function() {
    playWithTamagotchi()
})

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
        displayColor.style.background = '#b60101';
        displayColor.style.background = '-webkit-linear-gradient(to top, #b60101, rgb(238, 85, 58))';  
        displayColor.style.background = 'linear-gradient(to top, #b60101, rgb(238, 85, 58))';
        } else if (energyLevel <= 10 || happinessLevel <= 10 || hungerLevel <= 10) {
          tamagotchiStates[0].style.display = 'none'
          tamagotchiStates[3].style.display = 'block'
          displayColor.style.background = '#e60000';
          displayColor.style.background = '-webkit-linear-gradient(to top, #e60000, rgb(240, 96, 71))';  
          displayColor.style.background = 'linear-gradient(to top, #e60000, rgb(240, 96, 71))';
        } else if (energyLevel <= 20 || happinessLevel <= 20 || hungerLevel <= 20) {
          tamagotchiStates[0].style.display = 'none'
          tamagotchiStates[3].style.display = 'block'
          displayColor.style.background = '#e50000';
          displayColor.style.background = '-webkit-linear-gradient(to top, #e50000, rgb(243, 134, 115))';  
          displayColor.style.background = 'linear-gradient(to top, #e50000, rgb(243, 134, 115))';
        } else if (energyLevel <= 30 || happinessLevel <= 30 || hungerLevel <= 30) {
          tamagotchiStates[0].style.display = 'none'
          tamagotchiStates[3].style.display = 'block'
          displayColor.style.background = '#e42e00';
          displayColor.style.background = '-webkit-linear-gradient(to top, #e42e00, rgb(248, 189, 178))';  
          displayColor.style.background = 'linear-gradient(to top, #e42e00, rgb(248, 189, 178))';
        } else if (energyLevel <= 40 || happinessLevel <= 40 || hungerLevel <= 40) {
            displayColor.style.background = '#db6c22';
            displayColor.style.background = '-webkit-linear-gradient(to top, #db6c22, rgb(245, 202, 195))';  
            displayColor.style.background = 'linear-gradient(to top, #db6c22, rgb(245, 202, 195))';
        } else if (energyLevel <= 50 || happinessLevel <= 50 || hungerLevel <= 50) {
            displayColor.style.background = '#e6b492';
            displayColor.style.background = '-webkit-linear-gradient(to top,  #e6b492, #f2f8c6)';  
            displayColor.style.background = 'linear-gradient(to top, #e6b492, #f2f8c6)'; 
        }

        if (energyLevel <= 0 || happinessLevel <= 0 || hungerLevel <= 0) {
            clearInterval(levels)
            hatchText.innerText = "Bikkjen has died :("
        }    
        console.log('energi: ', energyLevel, 'lycka: ', happinessLevel, 'hunger: ', hungerLevel)
 }, 400);
}

 
 function feedTamagotchi(){ 
/*         if (hungerLevel < 0) {
        hungerLevel += 10;
            if (hungerLevel <= 100) {
                hungerLevel = 100;
                console.log("Bikkjen is full!");
            }
        } */
}


function sleepTamagotchi(){
    sleepButton.removeEventListener('click', sleepTamagotchi)
    sleepButton.addEventListener('click', awakenTamagotchi)

    clearInterval(levels)

    tamagotchiStates[0].style.display = 'none'
    tamagotchiStates[2].style.display = 'block'

    displayColor.style.background = '#080f6d';
    displayColor.style.background = '-webkit-linear-gradient(to top, #2933bb, #080f6d)';  
    displayColor.style.background = 'linear-gradient(to top, #2933bb, #080f6d)'; 

    energy = setInterval(() => {
        energyLevel ++

        console.log('energipåfyllnad: ', energyLevel);
        

        if (hatchText.innerText.length < 5){
            hatchText.innerText += ' z'
            console.log(
             hatchText.innerText.length)
        } else if (hatchText.innerText.length >= 5) {
            hatchText.innerText = ''
        }

        if (energyLevel == 100) {
            awakenTamagotchi()
        }
        
    }, 1000);
    
  
    


    
}

function awakenTamagotchi() {
    clearInterval(energy)
    hatchText.innerText = ''
    sleepButton.removeEventListener('click', awakenTamagotchi)
    sleepButton.addEventListener('click', sleepTamagotchi)

    tamagotchiStates[0].style.display = 'block'
    tamagotchiStates[2].style.display = 'none'
    displayColor.style.background = ''

    countDownLevels()
}


function playWithTamagotchi(){

}

function changeTamagotchiColor(){

}

function resetTamagotchi(){
}
