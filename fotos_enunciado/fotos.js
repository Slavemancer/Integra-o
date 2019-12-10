// fotos.js

// Inicialização da aplicação 
// chamada após o carregamento da página html associada
url = "http://localhost:3000/";

document.addEventListener("DOMContentLoaded", init);
var haha;
var haha2;
var haha3;

async function init() {
    console.log("init app!");
    usernames = document.querySelector("#usernames");
    usernames.addEventListener("change", alteraUser);
    await fetch(url + "usernames").then(response => response.json()).then(users => {

        for (const user of users) {
            usernames.innerHTML += '<option value="' + user.username + '">' + user.username + '</option>';
        }
        document.querySelector("#usernames").value = users[0].username;
    });
    getLikes(usernames.value).then(mostrar);
    buttons = document.querySelectorAll("button");
    for (const butao of buttons) {
        butao.addEventListener("click", alterarLike);
    }


}
async function alteraUser() {
    usernames = document.querySelector("#usernames");
    getLikes(usernames.value).then(mostrar)
}
async function mostrar(likes) {
    haha3 = likes;
    var username = document.querySelector("#usernames").value;
    await fetch(url + "fotos").then(response => response.json()).then(fotos => {
        cont = document.querySelector("#fotos");
        cont.innerHTML = "";
        haha = fotos;

        for (const foto of fotos) {
            var isLiked = false;
            for (const like of likes) {
                if (like.fotoId == foto.id) {
                    isLiked = true;
                    break;
                }
            }
            like = !isLiked ? '<img src="icons\\glyphicons-20-heart-empty.png">' : '<img src="icons\\glyphicons-13-heart.png">';
            cont.innerHTML += '<div class="foto" id="' + foto.id + '"><img src="imagens\\' + foto.name + '"><button data-fotoid="' + foto.id + '"><img src="icons/glyphicons-344-thumbs-up.png"></button>' + like + '</div>';
        }
    });
    for (const child of usernames.children) {
        document.addEventListener("click", alterar);
    }
}

var listaLikes;

function gravarlikes(treta) {
    listaLikes = treta;
}
async function getLikes(username) {
    urlLikes = 'http://localhost:3000/usernames/' + username + '/likes';
    await fetch(urlLikes).then(response => response.json()).then(likes => {
        listaLikes = likes;
    });
    return listaLikes;
}
/*  Funções auxiliares */

function getRequest(url, callback) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = callback;

    xhr.send();

}

// Remove os Corações (likes) que existiam na Interface associados a outro utilizador
function removeCoracoes() {
    var coracoes = document.querySelectorAll("button + img");

    coracoes.forEach(function(coracao) {
        coracao.parentNode.removeChild(coracao);
    });
}

function alterarLike(ev) {
    ev.preventDefault();

}