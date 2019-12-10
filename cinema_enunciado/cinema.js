// cinema.js

bd = "http://localhost:3000/filmes/";
var atual;
document.addEventListener("DOMContentLoaded", init);
var lixo;

function init() {
    mostrar("tt0417741");
    console.log('Init App!');
    var botoes = document.querySelectorAll('#filmes button');
    botoes.forEach(function(button) {
        button.addEventListener('click', clickBotao);
    });
    subBtn = document.querySelector("#form");
    subBtn.addEventListener("submit", enviarComment);
}

async function enviarComment(e) {
    e.preventDefault();
    text = document.querySelector('#comentario').value;
    document.querySelector('#comentario').value = "";
    date = new Date();
    await fetch(bd + atual + "/comentarios", {

        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            texto: text,
            filmeId: atual,
            data: date,
            id: null
        })
    });
    mostrarComment(date, text);
    text = "";
}

function clickBotao(e) {
    e.preventDefault();
    mostrar(this.id);
}

async function mostrar(id) {
    atual = id;
    var dados;
    response = await fetch(bd + id).then(response => {

        return response.json();


    }).then(
        data => dados = data
    );
    escreverConteudo("titulo", dados.Title);
    escreverConteudo("rating", dados.imdbRating);
    escreverConteudo("genero", dados.Genre);
    escreverConteudo("actores", dados.Actors);
    escreverConteudo("descricao", dados.Plot);
    var img = document.querySelector('#poster');
    img.src = "imagens/" + id + ".jpg";

    var comentarios;
    response = await fetch(bd + id + "/comentarios").then(response => {

        return response.json();


    }).then(
        data => comentarios = data
    );
    limparConteudo("comentarios");
    var comments = document.querySelector("#comentarios");
    lixo = comentarios;
    for (const comentario of comentarios) {
        data = new Date(comentario.data);
        mostrarComment(data, comentario.texto);

    }




}

function mostrarComment(data, texto) {
    var comments = document.querySelector("#comentarios");
    comments.innerHTML += "<dt>" + data.toLocaleString() + "</dt><dd>" + texto + "</dd>"
}

// Limpa o conteúdo de um elemento passando o seu id
function limparConteudo(id) {
    var elemento = document.querySelector('#' + id);
    elemento.innerHTML = "";
}

function escreverConteudo(id, texto) {
    var elemento = document.querySelector('#' + id);
    elemento.innerHTML = texto;
}