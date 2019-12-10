const geraNumeros = require("./geradorNumeros.js");

function gerarApostaSimples() {

    var num = geraNumeros.gerar(5, 1, 50);
    var est = geraNumeros.gerar(2, 1, 12);

    return { numeros: num, estrelas: est };

}

module.exports = gerarApostaSimples;
[].push()