let energyLevel = 100;
let happinessLevel = 100;
let hungerLevel = 100;

/* let energy ;
let happiness ;
let hunger ; */


const tamagotchiStates = document.querySelectorAll(".tamagotchi-img");;
tamagotchiStates.forEach(state => {
    state.style.display = 'none' 
});

const hatchText = document.querySelector('.hatch-text'); 
const startButton = document.querySelector('.start-button')
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

    let displayColor = document.querySelector('.tamagotchi-display')

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
        }    
        console.log('energi: ', energyLevel, 'lycka: ', happinessLevel, 'hunger: ', hungerLevel)
 }, 400);
}

/*   const feedButton = document.querySelector('.tamagotchi__button tamagotchi_button--eat')
    feedButton.addEventListener('click', function() {
    feedTamagotchi()})

 function feedTamagotchi(){ 

        if (hungerLevel < 0) {
        hungerLevel += 10;
            if (hungerLevel <= 100) {
                hungerLevel = 100;
                console.log("Bikkjen is full!");
            }
        }
}
 */

function sleepTamagotchi(){

}

function playWithTamagotchi(){

}

function changeTamagotchiColor(){

}

function resetTamagotchi(){
}
