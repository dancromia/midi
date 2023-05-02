function tocaSom(elementoAudio){
    
    const elemento = document.querySelector(elementoAudio)

if(elemento != null && elemento.localName === 'audio'){
    console.log(elemento.localName)
        elemento.play()
}
else {
    alert('Elemento não encontrado')
}
    
    
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    document.querySelectorAll[contador]
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(evento) {
        console.log(evento.code)
        if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
    console.log(instrumento)
}

