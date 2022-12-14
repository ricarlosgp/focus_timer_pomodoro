export default function Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
  }) {
  
    function play() {
      buttonPlay.classList.add('hide')
      buttonPause.classList.remove('hide')
      buttonSet.classList.add('hide')
      buttonStop.classList.remove('hide')
    }
  
    function pause() {
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')
    }
    
    function reset() {//declarei essa função pois irei utilizar esse escopo várias vezes e assim eu evito o copiar e colcar de todo esse escopo. 
        buttonPlay.classList.remove('hide')//pegue o buttonPlay e da classList dele REMOVE a classe HIDE=OCULTAR 
        buttonPause.classList.add('hide')//peque o buttonPause e na classList dele add a classe HIDE=OCULTAR 
        buttonSet.classList.remove('hide')//peque o buttonSet e na classList dele remove a classe HIDE=OCULTAR
        buttonStop.classList.add('hide')//peque o buttonStop e na classList dele add a classe HIDE=OCULTAR.   
    }
  
    function getMinutes() {
      let newMinutes = prompt('Quantos minutos?')
      if (!newMinutes) {
        return false
      }
  
      return newMinutes
    }
  
    return {
      reset,
      play,
      pause,
      getMinutes
    }
  }
