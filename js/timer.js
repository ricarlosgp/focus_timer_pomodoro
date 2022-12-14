import Sounds from "./sounds.js"

export default function Timer({ 
    minutesDisplay, 
    secondsDisplay, 
    resetControls
  }) {
  
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)
  
    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
  
    function reset() {
      updateDisplay(minutes, 0)
      clearTimeout(timerTimeOut)
    }
  
    function countdown(){
      timerTimeOut = setTimeout(function() {
        let seconds =  Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0
  
        updateDisplay(minutes, 0)
  
        if (isFinished) {
            resetControls()
            updateDisplay()
            Sounds().timeEnd()
            return
        }
  
        if( seconds <= 0 ) {
          seconds = 60
          --minutes
        }
  
        updateDisplay(minutes, String(seconds - 1))
  
        countdown()
      }, 1000)
    }
  
    function updateMinutes(newMinutes) {
      minutes = newMinutes
    }
  
    function hold() {
      clearTimeout(timerTimeOut)
    }
  
    return {
      countdown,
      reset,
      updateDisplay,
      updateMinutes,
      hold
    }
  }

/*

function updateTimerDisplay(minutes, seconds) {//declarei essa função pois irei utilizar esse escopo várias vezes e assim eu evito o copiar e colcar de todo esse escopo. Essa função irá atualizar os minutes e seconds 
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)    
}

function countdow() {
    //decrementando o tempo a cada um segundo = 1000milesegundos
    timerTimeOut = setTimeout(function() {//após dar o play a cada 1000ms=1segundo, execute a função abaixo:
        
    let seconds = Number(secondsDisplay.textContent)//declareiuma variável let seconds e declarei uma conversão Numéricao secondsDisplay com seu conteúdo textContent(que vaiestar 00)
    let minutes = Number(minutesDisplay.textContent)//declareiuma variável let minutes e declarei uma conversão Numéricao minutesDisplay.textContent com seu conteúdo textConten(que vai estar 25)
    updateTimerDisplay(minutes, 0)
    //pegue a minha função criada updateTimerDisplay eatualize o minutes(conforme ele está) e atualize o secondspara 0(zero)       

    if(minutes <= 0) { //se minutes for <= 0 execute a funçãoresetControls() e encerra a execução da função comreturn             
        resetControls()
        return
    }

    if( seconds <= 0) { //se seconds for <= 0 faça seconds =60 (ou seja, ele vai iniciar com 60 e subtrair -1 = 59)...
        seconds = 3
        --minutes //aqui estou decrementando o minutes com -1.É a mesma forma de minutes = minutes-1                   
    }       

    updateTimerDisplay(minutes, String(seconds - 1))//pegue aminha função criada updateTimerDisplay mantenha o meuminutes(foi criado acima --minutes) e atualize convertendopara String o seconds subtraindo-o com -1 
               
    countdow()//quando a função acima diminuir de -1, chameexecute ou rode a mesma função criada que foi functioncountdow. Se não repetir a mesma function countdow osegundo ficará parado em 59. Esse processo da funçãochamar ela mesma é Recursividade. Então a cada 1000ms=1sirá dimunuir -1 do seconds após dar o play e se não derstop essa função vai rodar para o resto da vida e aochegar no 0 o seconds vai para 59 e não 60. 
},  1000) //o segundo têm que ser dados em 1000ms    
}

export {countdow, resetTimer} //exportando a função coutdown e resetTimes para serem importadas em um dos *.js. Esse processo de export é chamado de NAMED EXPORT

*/