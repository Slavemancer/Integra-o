/* infraestruturasPortugal.js */


const URL_PEDIR_ESTACOES_PARTE1 = "https://www.infraestruturasdeportugal.pt/rede/estacoes/json/";
const URL_PEDIR_HORARIOS_PARTE1 = "https://www.infraestruturasdeportugal.pt/negocios-e-servicos/horarios/partidas/";
const HORA_INICIO = "T00:00:00+";
const HORA_FIM = "T23:59:59";


/* 
   "The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed."
   "You can listen for this event on the Window interface"
   <cite>https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event</cite>
*/
window.addEventListener('DOMContentLoaded', initApp);


/* Fazemos a inicialização da aplicação neste função */
function initApp() {
    /* Seleccionar e obter uma referência para os seguintes Elementos no HTML
    	- elemento <input id="estacaoOrigem" ... >
    	- elemento <form>

     */

    var inputEstacaoOrigem = document.querySelector("#estacaoOrigem");
    var form = document.querySelector("form");


    /* Queremos dar resposta aos seguintes Eventos nos correspondentes Objectos 
    	
    	Objecto 			 Evento    	Event-Handler
    	inputEstacaoOrigem   input 	sugereEstacoes
    	form 				 submit 	procuraHorarios 	
    */

    inputEstacaoOrigem.addEventListener("input", sugereEstacoes);
    form.addEventListener("submit", procuraHorarios);


    console.log("initApp");

    var colTd = document.querySelectorAll("td");

    for (let td of colTd) {
        td.addEventListener("click", function() {
            console.log("Click um <td>");
        });
    }


}


/* Função Event-Handler do evento 'input' no objecto <input id="estacaoOrigem"  ... > */
function sugereEstacoes() {

    /* Keyword this num event handler  
       "When a function is used as an event handler, its this is set to the element the event fired from"
       <cite>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this</cite>
    */

    termo = this.value;
    console.log(termo);
    if (termo.length >= 2) {
        console.log("Aqui devemos realizar um Pedido HTTP de Sugestões de Estações com o termo " + termo);
        var url = URL_PEDIR_ESTACOES_PARTE1 + termo;
        getRequest(url, processaRespostaComSugestoes);
    }


}



function pedirSugestoes(termo) {


}

/* Função Event-Handler do evento 'load' no objecto xhr criado para fazer o pedido HTTP das estacoes em getRequest */
function processaRespostaComSugestoes() {
    var lista = document.querySelector("#estacoes");
    lista.innerHTML = "";
    var estacoes = JSON.parse(this.responseText);
    var option;
    console.log(JSON.parse(this.responseText));
    for (const estacao of estacoes) {
        option = document.createElement("option");
        option.value = estacao.name;
        lista.appendChild(option);
    }


}

function getID() {}

/* Função Event-Handler do evento 'submit' no objecto <form> */
function procuraHorarios(e) {
    console.log("Aqui devemos realizar um Pedido HTTP de Horarios ");
    var inptData = document.querySelector("#dia");
    var inptOrigem = document.querySelector("#estacaoOrigem");

    var data = inptData.value;
    var origem = inptOrigem.value;

    var url = URL_PEDIR_HORARIOS_PARTE1;
    getRequest(url, processaRespostaComSugestoes);
    e.preventDefault(); // Anula o comportamento por defeito, neste caso a submissão do formulário

}



/* Função Event-Handler do evento 'load' no objecto xhr criado para fazer o pedido HTTP dos horários das partidas de uma dada estacao em getRequest */
function processaRespostaComHorarios() {


    console.log(JSON.parse(this.responseText));

}



/* Procura na colecção das options do datalist o value nomeEstacao
   retorn o id da Estacao encontrada( atributo id da option)	
*/
function getIdEstacao(nomeEstacao) {



}


/* Função Auxiliar para executar Pedidos HTTP GET */
function getRequest(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.addEventListener("load", callback);
    xhr.send();
}