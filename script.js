function changeText() {
    document.getElementById('texto_de_mudança').innerText = 'Texto alterado com sucesso!';
}
changeText();

    var botao = document.getElementById('changeButton');
    botao.onclick = function() {
        document.getElementById('mudando_texto').style.backgroundColor = 'blue';
    };