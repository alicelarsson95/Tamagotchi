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
    hatchText.innerText = "It's hatched!"
    
    
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
        } else if (energyLevel <= 30 || happinessLevel <= 30 || hungerLevel <= 30) {
          tamagotchiStates[0].style.display = 'none'
          tamagotchiStates[3].style.display = 'block'
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
