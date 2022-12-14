import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop
} from "./elements.js"

export default function({controls, timer, sound}) {

  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.play()
  })
  
  buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
  })

  buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

}

  /*
//obs: programação imperativa você executa passo a passo o que dever se feito e até agora usamos programação imperativa. A proglamação declarativa não utilizamos o passo a passo simplesmente mandamos fazer tal coisa e será feito automaticamente Ex: desenvolvedores de React.jvs
//Event-driven = movido a eventos Ex: DOM, click ou clicar, mouse andando na página, um elemento aparecendo ou sumindo da tela também é um evento, rolagem de tela com a barra de rolagem etc.

//callback = chame de volta

//addEventListener = add=adiconar event=evento listenner=ouvinte ou receptor é a pessoa que está lendo ou ouvindo a mensagem. Resumindo temos: adiciona um Evento(no caso será o click) e um listener(será uma função com argumentos)

//refatoração = mudar o código para deixá-lo de fácil entendimento sem alterar suas funcionalidades
// se for reusar códigos, crie uma função
//DOM = Document object Model ou Modelo de objeto de documento. No CSS eu consigo acessar ao body dessa forma: body{} e no HTML é <body> já no javascript eu preciso do document.

//como não irei mudar a estrutura dos button no html então eu posso declarar variável como const ao invés de let

//O método document.querySelector() retorna o primeiro elemento dentro do documento HTML que corresponde ao seletor ou grupo de seletores especificado. Se nenhuma correspondência for encontrada, null será retornado.Ex: pesquisando pelo seletor dentro do meu document HTML o botão play. O botão play no HTML é uma class ou claasse e por isso foi inserido o ponto play ('.play')

/* ANTES DA REFATORAÇÃO ACIMA */
/*
const buttonPlay = document.querySelector('.play') //declarei uma variável const buttonPlay e busquei ou selecionei em meu documento HTML o elemento .play que está no html
const buttonPause = document.querySelector('.pause')//declarei uma variável const buttonPause e busquei ou selecionei dentro do meu documento HTML o elemento .pause que está no html
const buttonStop = document.querySelector('.stop')//declarei uma variável const buttonStop e busquei ou selecionei dentro do meu documento HTML o elemento .stop que está no html
const buttonSet = document.querySelector('.set')//declarei uma variável const buttonSet e busquei ou selecionei dentro do meu documento HTML o elemento .set que está no html
const buttonSoundOn = document.querySelector('.sound-on')//declarei uma variável const buttonSoundOn e busquei ou selecionei dentro do meu documento HTML o elemento .sound-on
const buttonSoundOff = document.querySelector('.sound-off')//declarei uma variável const buttonSoundOff e busquei ou selecionei dentro do meu documento HTML o elemento .sound-off
const minutesDisplay = document.querySelector('.minutes')//declarei uma variável const minutesDisplay e busquei ou selecionei dentro do meu documento HTML o elemento que é um span class="minutes"
const secondsDisplay = document.querySelector('.seconds')//declarei uma variável const secondsDisplay e busquei ou selecionei dentro do meu documento HTML o elemento que é um span class="seconds"
let minutes = Number(minutesDisplay.textContent) 
let timerTimeOut //declarei essa variável sem valores para ser inserida o valor em uma função abaixo




buttonPlay.addEventListener('click', function(){//ao clicar no play adicione o evento('click') e o Listener(function(){}). Após o click, execute a function(){} com seus argumentos abaixo.
    buttonPlay.classList.add('hide') //na lista de classe do elemento play eu adiciono ('hide' = ocultar). Nessa linha ao clicar no botão player irei sumir, ocultar esse botão para que apareça o botão do pause.
    buttonPause.classList.remove('hide')//na lista de classe do elemento pause eu removerei o ('hide' = ocultar). Nessa linha ao clicar no botão player irei REMOVER\REMOVE, sumir, ocultar o botão de pause fazendo com que o botão PLAY apareça no lugar do botão de PAUSE...
    buttonSet.classList.add('hide')//quando eu der o play eu adiciono no botão Set a função hide ou ocultar.
    buttonStop.classList.remove('hide')//quando eu clicar no botão do play eu REMOVEREIR\REMOVE do botão STOP a função de hide ou ocultar fazendo com que o botão STOP apareça no lugar do botão de set.   
    countdow()//function countdow
}) 

buttonPause.addEventListener('click', function(){//ao clicar no pause adicione o evento('click') e o Listener(function(){}). Após o click, execute a function(){} com seus argumentos abaixo.
    buttonPause.classList.add('hide') //na lista de classe do elemento pause eu adiciono ('hide' = ocultar)
    buttonPlay.classList.remove('hide')//na lista de classe do elemento play eu removerei o ('hide' = ocultar)
    clearTimeout(timerTimeOut) //estou pausando o relógio e mantendo o valor ao qualo foi pausado
}) 

buttonStop.addEventListener('click', function(){//ao clicar no buttonStop add o Event('click') e o Listener(function(){}). Após o click, execute a function  resetControls().
    resetControls()
    resetTimer()    
})

buttonSoundOn.addEventListener('click', function(){//quando eu clicar no buttonSoundOn, execute:
    buttonSoundOn.classList.add('hide')//pegue o buttonSoundOn e da classList dele, add a classe hide para poder ficar oculto em meu front-end pois o hide não foi inserido no HTML.ADICIONANDO OCULTAR. 
    buttonSoundOff.classList.remove('hide')//pegue o buttonSoundOff e da classList dele, remove a classe hide para poder ficar visível em meu front-end pois o hide foi criado para ele no HTML "sound-off hide". REMOVENDO OCULTAR. 
})

buttonSoundOff.addEventListener('click', function(){//quando eu clicar no buttonSoundOff, execute:
    buttonSoundOn.classList.remove('hide')//pegue o buttonSoundOn e da classList dele, remove a classe hide que foi adicionada aqui no script.js na linha 44 para que assim ele volte a ficar visível em meu front-end. REMOVENDO OCULTAR. 
    buttonSoundOff.classList.add('hide')//pegue o buttonSoundOff e da classList dele, add a classe hide para que assim ele volte a ficar OCULTO em meu front-end. ADICIONANDO OCULTAR. 
})

buttonSet.addEventListener('click', function(){//ao clicar no buttonSet adicione o Event('click') e o Listener(function(){}). Após o click, execute a function(){} com seus argumentos abaixo.
    let newMinutes = prompt('Quantos minutos?')//minutes recebe promp
    if (!newMinutes) {
        resetTimer()
        return
    }
    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})

*/