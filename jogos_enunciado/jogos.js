// jogos.js
url = "http://localhost:3000/jogos";
var haha;

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log('init app');
    getJogos();
}

function getJogos() {
    fetch(url).then(response => response.json()).then(jogos => {
        resultados = document.querySelector("#jogos");
        jogos.forEach(jogo => {
            if (!jogo.jaRealizado) {
                resultados.innerHTML += '<li id="' + jogo.id + '"><label class="visitada">' + jogo.visitada + '</label><input type="text" class="golosVisitada"><input type="text" class="golosVisitante"><label class="visitante">' + jogo.visitante + '</label><button data-nrjogo="' + jogo.id + '">Actualizar</button></li>';
            } else {
                resultados.innerHTML += '<li id="' + jogo.id + '"><label class="visitada">' + jogo.visitada + '</label><input type="text" class="golosVisitada" value="' + jogo.golosVisitada + '" disabled="true"><input type="text" class="golosVisitante" value="' + jogo.golosVisitante + '" disabled="true"><label class="visitante">' + jogo.visitante + '</label></li>'
            }
        });
        butoes = document.querySelectorAll("button");
        butoes.forEach(butao => {
                butao.addEventListener("click", atualizarJogo);
            }

        )
    });
}

function atualizarJogo(evt) {
    haha = evt;
    li = evt.path[1];
    fetch(url + "/" + li.id, {

        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: li.id,
            visitada: li.children[0].innerText,
            golosVisitada: li.children[1].value,
            visitante: li.children[3].innerText,
            golosVisitante: li.children[2].value,
            jaRealizado: true
        })
    });
    li.removeChild(li.childNodes[4]);
    li.children[1].disabled = true;
    li.children[2].disabled = true;


}
/* Nota: 
        No UPDATE do resultado de um jogo, será valorizado a actualização 
        cirúrgica do HTML com base na resposta do respectivo pedido HTTP  
*/