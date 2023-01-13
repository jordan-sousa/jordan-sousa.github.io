 
 var altura = 0
 var largura = 0 
 var vidas = 1
 var tempo = 15

 var criarMosquitoTempo = 1500

 var nivel = window.location.search
 nivel = nivel.replace('?', '')

 if(nivel === 'normal') {
    // 1500
    criarMosquitoTempo = 1500
 } else if(nivel === 'dificil') {
    // 1000
    criarMosquitoTempo = 1000
 } else if(nivel === 'Impossivel') {
    // 750
    criarMosquitoTempo = 750
 }

 function ajustarTamanhoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
 }

ajustarTamanhoJogo()

var cronometro = setInterval(function() {
    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
    
}, criarMosquitoTempo)

function posicaRandomica() {


    // REMOVER O MOSQUITO ANTERIOR (CASO EXISTA)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        // console.log('elemento selecionado foi: v' + vidas);
        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html' 
         } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
         }
       
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    // USANDO OPERADOR TERNARIO
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // CRIAR O ELEMENTO HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 02:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}