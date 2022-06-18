// criptografando o texto
function criptografarTexto() {

    let textoDigitado = document.querySelector('#texto-cripto').value.toLowerCase();
    let textoAlterado = textoDigitado
    .replace(/a/g,'ar')
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufta')
 
    return textoAlterado;

}

//descriptografando o texto
function DescriptografarTexto(){
    let desCripto = criptografarTexto()
    let texto = desCripto
    .replace(/ar/g,'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufta/g, 'u')

    return texto
}

//botão para criptografar
document.querySelector('#encriptador').addEventListener('click', function () {
    
    document.querySelector('.titulo--mensagem').innerHTML = criptografarTexto();
    document.querySelector('#btn--copiar').style.display = 'block';
    
});


//botão para descriptografar
document.querySelector('#desencriptador').addEventListener('click',function(){
    document.querySelector('.titulo--mensagem').innerHTML = DescriptografarTexto();   
    
})

//botão de copiar o texto
document.querySelector('#btn--copiar').addEventListener('click', clipboardCopy)
async function clipboardCopy() {
  let texto = criptografarTexto();
  await navigator.clipboard.writeText(texto);
  console.log('texto copiado')
}


