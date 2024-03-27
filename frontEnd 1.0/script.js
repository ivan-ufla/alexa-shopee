var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var reconhecimento = new SpeechRecognition();
reconhecimento.continuous = true;
reconhecimento.lang = 'pt-BR';
reconhecimento.interimResults = false;
reconhecimento.maxAlternatives = 1;

var result = document.getElementById('txtChat');

reconhecimento.onresult = function (event) {
    let tamanho = event.results.length;
    let conteudo = event.results[tamanho-1][0].transcript;
    result.textContent = 'Recebido: ' + conteudo;
}

document.getElementById('btnGravar').onclick = function(){
    reconhecimento.start();
}

document.getElementById('btnParar').onclick = function(){
    reconhecimento.stop();
}
