const caixaTexto = document.querySelector("#caixa__texto__container"); 
const botaoCriptografar = document.querySelector(".botao__criptografar");
const botaoDescriptografar = document.querySelector(".botao__descriptografar");
const botaoCopiar = document.querySelector(".botao__copiar");
const mensagemInicial = document.querySelector(".mensagem__inicial");
const resultado = document.querySelector(".resultado");
const saidaCodificador = document.getElementById("saida__codificador");

botaoCriptografar.addEventListener("click", () => {
    const texto = caixaTexto.textContent.toLowerCase(); 
    const textoCriptografado = criptografar(texto);
    exibirResultado(textoCriptografado);
    document.querySelector('.imagem__busca').style.display = "none";
});

botaoDescriptografar.addEventListener("click", () => {
    const texto = caixaTexto.textContent; 
    const textoDescriptografado = descriptografar(texto);
    exibirResultado(textoDescriptografado);
    document.querySelector('.imagem__busca').style.display = "none";
});

botaoCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(saidaCodificador.value)
        .then(() => {
          
})
        .catch(err => {
            console.error("Falha ao copiar:", err);
        });
});

function exibirResultado(texto) {
    mensagemInicial.style.display = "none";
    resultado.style.display = "block";
    saidaCodificador.value = texto;
}

function criptografar(texto) {
    let textoCriptografado = texto;
    textoCriptografado = textoCriptografado.replace(/e/g, "enter");
    textoCriptografado = textoCriptografado.replace(/i/g, "imes");
    textoCriptografado = textoCriptografado.replace(/a/g, "ai");
    textoCriptografado = textoCriptografado.replace(/o/g, "ober");
    textoCriptografado = textoCriptografado.replace(/u/g, "ufat");
    return textoCriptografado;
}

function descriptografar(texto) {
    let textoDescriptografado = texto;
    textoDescriptografado = textoDescriptografado.replace(/enter/g, "e");
    textoDescriptografado = textoDescriptografado.replace(/imes/g, "i");
    textoDescriptografado = textoDescriptografado.replace(/ai/g, "a");
    textoDescriptografado = textoDescriptografado.replace(/ober/g, "o");
    textoDescriptografado = textoDescriptografado.replace(/ufat/g, "u");
    return textoDescriptografado;
}