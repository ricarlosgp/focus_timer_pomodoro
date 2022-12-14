const buttonPlay = document.querySelector('.play') //declarei uma variável const buttonPlay e busquei ou selecionei em meu documento HTML o elemento .play que está no html
const buttonPause = document.querySelector('.pause')//declarei uma variável const buttonPause e busquei ou selecionei dentro do meu documento HTML o elemento .pause que está no html
const buttonStop = document.querySelector('.stop')//declarei uma variável const buttonStop e busquei ou selecionei dentro do meu documento HTML o elemento .stop que está no html
const buttonSet = document.querySelector('.set')//declarei uma variável const buttonSet e busquei ou selecionei dentro do meu documento HTML o elemento .set que está no html
const buttonSoundOn = document.querySelector('.sound-on')//declarei uma variável const buttonSoundOn e busquei ou selecionei dentro do meu documento HTML o elemento .sound-on
const buttonSoundOff = document.querySelector('.sound-off')//declarei uma variável const buttonSoundOff e busquei ou selecionei dentro do meu documento HTML o elemento .sound-off
const minutesDisplay = document.querySelector('.minutes')//declarei uma variável const minutesDisplay e busquei ou selecionei dentro do meu documento HTML o elemento que é um span class="minutes"
const secondsDisplay = document.querySelector('.seconds')//declarei uma variável const secondsDisplay e busquei ou selecionei dentro do meu documento HTML o elemento que é um span class="seconds"

export {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay
}