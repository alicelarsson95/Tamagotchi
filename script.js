const batteryLevels = [
    {name: "10%", img: "img/battery-0.png"},
    {name: "25%", img: "img/battery-1.png"},
    {name: "50%", img: "img/battery-2.png"},
    {name: "75%", img: "img/battery-3.png"},
    {name: "100%", img: "img/battery-4.png"}
]

const levelSleep = document.querySelector('.tamagotchi-levels--sleep .battery-level')
const levelHunger = document.querySelector('.tamagotchi-levels--hunger .battery-level')
const levelHappy = document.querySelector('.tamagotchi-levels--play .battery-level')

const tamagotchiStates = document.querySelectorAll(".tamagotchi-img");;
tamagotchiStates.forEach(state => {
    state.style.display = 'none' 
});

let displayTamagotchi = document.querySelector('.tamagotchi-display')
const displayStats = document.querySelector('.tamagotchi-display--levels')


const sleepButton = document.querySelector('.tamagotchi_button--sleep')
const feedButton = document.querySelector('.tamagotchi_button--eat')
const playButton = document.querySelector('.tamagotchi_button--play')
const statsButton = document.querySelector('.tamagotchi_button--levels')

const startButton = document.querySelector('.start-button')
const resetButton = document.querySelector('.reset-button')
resetButton.addEventListener('click', resetTamagotchi)

const hatchText = document.querySelector('.hatch-text'); 
const eggImage = document.querySelector('.tamagotchi-img--egg');
const ball = document.querySelector(".tamagotchi-img--ball");

let hungerLevel = 100
let energyLevel = 100
let happinessLevel= 100


function loadData() {
    console.log('Loading...');
    const savedHunger = localStorage.getItem('hungerLevel')
    const savedHappiness = localStorage.getItem('happinessLevel')
    const savedEnergy = localStorage.getItem('energyLevel')
    const lastSave = parseInt(localStorage.getItem('lastSave'), 10) || Date.now()

    if (savedEnergy && savedHappiness && savedHunger) {
        happinessLevel = JSON.parse(savedHappiness)
        hungerLevel = JSON.parse(savedHunger)
        energyLevel = JSON.parse(savedEnergy)
        console.log(energyLevel,happinessLevel,hungerLevel);
        

        const timeSinceLast = Math.floor((Date.now() - lastSave) / 10000)

        hungerLevel -= timeSinceLast
        energyLevel -= timeSinceLast
        happinessLevel -= timeSinceLast

        hungerLevel = Math.max(0, hungerLevel);
        energyLevel = Math.max(0, energyLevel);
        happinessLevel = Math.max(0, happinessLevel);

        console.log(energyLevel,happinessLevel,hungerLevel);
        return true;
    }
    return false;
}


startButton.addEventListener('click', function() {
    if(loadData()) {
        startTamagotchi()
    } else {
        tamagotchiStates[4].style.display = 'block';
        hatchText.innerText = 'Hatching..';
        eggImage.classList.add('shake');
        setTimeout(() => {
            eggImage.classList.remove('shake');
            startTamagotchi()
            hatchText.innerText = "Bikkjen has hatched!"
        }, 5000);
    }

    startButton.disabled = true;

})

function watchStats(){
    displayTamagotchi.style.display = 'none'
    displayStats.style.display = 'flex'

    statsButton.removeEventListener('click', watchStats)

    statsButton.addEventListener('click', stopWatchingStats)
}

function stopWatchingStats() {
    displayTamagotchi.style.display = 'flex'
    displayStats.style.display = 'none'

    statsButton.removeEventListener('click', stopWatchingStats)
    statsButton.addEventListener('click', watchStats)
}


function startTamagotchi() {
    tamagotchiStates[4].style.display = 'none'
    if(energyLevel <= 30 || happinessLevel <= 30 || hungerLevel <= 30){
        tamagotchiStates[3].style.display = 'block'
        hatchText.innerText = 'Finally!!!'
    } else{
    tamagotchiStates[0].style.display = 'block'
    tamagotchiStates[0].classList.add('moving-dragon')
    hatchText.innerText = "You're back <3" 
    }
    sleepButton.addEventListener('click', sleepTamagotchi)
    feedButton.addEventListener('click', feedTamagotchi)
    playButton.addEventListener('click', playWithTamagotchi)

    statsButton.addEventListener('click', watchStats) 
    
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

 batteryStatus()

    console.log('energi: ', energyLevel, 'lycka: ', happinessLevel, 'hunger: ', hungerLevel)
    
    if (energyLevel <= 0 || happinessLevel <= 0 || hungerLevel <= 0){
        displayTamagotchi.style.display = 'flex'
        displayStats.style.display = 'none'

        tamagotchiStates[3].style.display = 'none'
        tamagotchiStates[1].style.display = 'block'
        

        playButton.disabled = true
        sleepButton.disabled = true
        feedButton.disabled = true
        statsButton.disabled = true
        
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

       
        saveData()
 }, 400);
}

function batteryStatus() {
       if (energyLevel <= 10) {
        levelSleep.innerHTML = `<img class="battery-icon" src="${batteryLevels[0].img}">`
    } else if (energyLevel <= 25) {
        levelSleep.innerHTML = `<img class="battery-icon" src="${batteryLevels[1].img}">` 
    } else if (energyLevel <= 50) {
        levelSleep.innerHTML = `<img class="battery-icon" src="${batteryLevels[2].img}">`
    } else if (energyLevel <= 75) {
        levelSleep.innerHTML = `<img class="battery-icon" src="${batteryLevels[3].img}">`
    } else if (energyLevel <= 100) {
        levelSleep.innerHTML = `<img class="battery-icon" src="${batteryLevels[4].img}">`
    } else {
        console.log('WTF'); 
    }

    if (hungerLevel <= 10) {
        levelHunger.innerHTML = `<img class="battery-icon" src="${batteryLevels[0].img}">`
    } else if (hungerLevel <= 25) {
        levelHunger.innerHTML = `<img class="battery-icon" src="${batteryLevels[1].img}">`
    } else if (hungerLevel <= 50) {
        levelHunger.innerHTML = `<img class="battery-icon" src="${batteryLevels[2].img}">`
    } else if (hungerLevel <= 75) {
        levelHunger.innerHTML = `<img class="battery-icon" src="${batteryLevels[3].img}">`
    } else if (hungerLevel <= 100) {
        levelHunger.innerHTML = `<img class="battery-icon" src="${batteryLevels[4].img}">`
    } else {
        console.log('WTF'); 
    }

    if (happinessLevel <= 10) {
        levelHappy.innerHTML = `<img class="battery-icon" src="${batteryLevels[0].img}">`
    } else if (happinessLevel <= 25) {
        levelHappy.innerHTML = `<img class="battery-icon" src="${batteryLevels[1].img}">`
    } else if (happinessLevel <= 50) {
        levelHappy.innerHTML = `<img class="battery-icon" src="${batteryLevels[2].img}">`
    } else if (happinessLevel <= 75) {
        levelHappy.innerHTML = `<img class="battery-icon" src="${batteryLevels[3].img}">`
    } else if (happinessLevel <= 100) {
        levelHappy.innerHTML = `<img class="battery-icon" src="${batteryLevels[4].img}">`
    } else {
        console.log('WTF'); 
    }


    
}

 
 function feedTamagotchi(){ 
    displayTamagotchi.style.display = 'flex'
    displayStats.style.display = 'none'
    feedButton.removeEventListener('click', feedTamagotchi)
    feedButton.addEventListener('click', stopfeedingTamagotchi)
    sleepButton.disabled = true
    playButton.disabled = true
    statsButton.disabled = true
    
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
    saveData()
}

function stopfeedingTamagotchi(){
    clearInterval(eating)
    hatchText.innerText = ''
    feedButton.removeEventListener('click', stopfeedingTamagotchi)
    feedButton.addEventListener('click', feedTamagotchi)
    sleepButton.disabled = false
    playButton.disabled = false
    statsButton.disabled = false


    tamagotchiStates[5].style.display = 'none'
    tamagotchiStates[6].style.display = 'none'

    if(energyLevel <= 30 || hungerLevel <= 30 || happinessLevel <= 30) {
        tamagotchiStates[3].style.display = 'block'
        tamagotchiStates[0].style.display = 'none'
    } else {
        tamagotchiStates[3].style.display = 'none'
        tamagotchiStates[0].style.display = 'block'
    }
    

    countDownLevels()

    
}

function sleepTamagotchi(){
    displayTamagotchi.style.display = 'flex'
    displayStats.style.display = 'none'
    statsButton.disabled = true
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

        if (energyLevel >= 100) {
            awakenTamagotchi()
        }
    }, 1000);
    saveData()
}

function awakenTamagotchi() {
    clearInterval(energy)
    hatchText.innerText = ''
    sleepButton.removeEventListener('click', awakenTamagotchi)
    sleepButton.addEventListener('click', sleepTamagotchi)
    feedButton.disabled = false
    playButton.disabled = false
    statsButton.disabled = false



    tamagotchiStates[2].style.display = 'none'
    displayTamagotchi.style.background = ''

    if(energyLevel <= 30 || hungerLevel <= 30 || happinessLevel <= 30) {
        tamagotchiStates[3].style.display = 'block'
        tamagotchiStates[0].style.display = 'none'
    } else {
        tamagotchiStates[3].style.display = 'none'
        tamagotchiStates[0].style.display = 'block'
    }

    countDownLevels()
}


function playWithTamagotchi(){
    displayTamagotchi.style.display = 'flex'
    displayStats.style.display = 'none'
    playButton.removeEventListener('click', playWithTamagotchi)
    playButton.addEventListener('click', stopPlayingWithTamagotchi)
    feedButton.disabled = true
    statsButton.disabled = true
    sleepButton.disabled = true
    
    clearInterval(levels)
    
    tamagotchiStates[3].style.display = 'none'
    tamagotchiStates[7].style.display = 'block'

    tamagotchiStates[0].style.display = 'block'
    tamagotchiStates[0].style.position = 'absolute'
    tamagotchiStates[0].style.right = '0'
    tamagotchiStates[0].style.bottom = '5rem'

    tamagotchiStates[0].classList.add('bouncing-dragon')
    
    play = setInterval(() => {
        happinessLevel ++

        console.log('lycka: ', happinessLevel);
        

        if (happinessLevel >= 100) {
            stopPlayingWithTamagotchi()
        }
    }, 1000);
    saveData()
}

function stopPlayingWithTamagotchi(){
    playButton.removeEventListener('click', stopPlayingWithTamagotchi)
    playButton.addEventListener('click', playWithTamagotchi)

    clearInterval(play)
    feedButton.disabled = false
    sleepButton.disabled = false
    statsButton.disabled = false


    tamagotchiStates[7].style.display = 'none'
    
    tamagotchiStates[0].style.display = ''
    tamagotchiStates[0].style.position = ''
    tamagotchiStates[0].style.right = ''
    tamagotchiStates[0].style.bottom = ''
    
    tamagotchiStates[0].classList.remove('bouncing-dragon')
    
    if(energyLevel <= 30 || hungerLevel <= 30 || happinessLevel <= 30) {
        tamagotchiStates[3].style.display = 'block'
        tamagotchiStates[0].style.display = 'none'
    } else {
        tamagotchiStates[3].style.display = 'none'
        tamagotchiStates[0].style.display = 'block'
    }

    countDownLevels()
}


function saveData () {
    localStorage.setItem('hungerLevel', JSON.stringify(hungerLevel))
    localStorage.setItem('happinessLevel', JSON.stringify(happinessLevel))
    localStorage.setItem('energyLevel', JSON.stringify(energyLevel))
    localStorage.setItem('lastSave', Date.now())

    console.log('saving...');
}


function resetTamagotchi(){
    localStorage.clear()
    location.reload()
}


loadData()
