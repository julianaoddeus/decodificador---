let texto = document.querySelector('#texto-cripto');
let mensagem = document.querySelector('.titulo--mensagem');
mensagem.value;
let botaoCriptografar = document.querySelector('.button');

botaoCriptografar.addEventListener("click", function () {
    const input = encriptaTexto(texto.value);
    mensagem.innerHTML = input;


});

function encriptaTexto(vogais) {
    const vogaisMatriz = [
        ['a', 'ai'],
        ['e', 'enter'],
        ['i', 'imes'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    vogais = vogais.toLowerCase();

    for (let i = 0; i < vogaisMatriz.length; i++) {
        if (vogais.includes(vogaisMatriz[i][0])) {
            vogais = vogais.replaceAll(vogaisMatriz[i][0], vogaisMatriz[i][1])
        }
    }

    return vogais;
}





let botaoCopiar = document.querySelector(".copy");

botaoCopiar.addEventListener("click", function () {
    let textoCopiado = document.querySelector(".titulo--mensagem");
    textoCopiado.select();
    document.execCommand('copy');
    alert('copiado');
})
