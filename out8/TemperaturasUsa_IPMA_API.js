/* TemperaturasUsa_IPMA_API.js */

document.body.addEventListener("mousedown", clickRato);

function clickRato() {
    alert("não carregues no ecrã");
}

const URL_PREVISOES_IPMA = "http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json";

/*   Pedido HTTP à API do IPMA    */

// Excerto de código adaptado de
// https://stackoverflow.com/questions/247483/http-get-request-in-javascript
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", URL_PREVISOES_IPMA, true); // false for synchronous request
xmlHttp.send(null);
xmlHttp.addEventListener("load", tudo);

document.getElementById("temps").innerHTML = '<img src="ajax-loader.gif">';

function tudo() {

    var resposta = xmlHttp.responseText;

    console.log(resposta);

    // Converter a string (de texto JSON) para um Objecto Javascript 
    var respostaObjecto = JSON.parse(resposta);
    //console.log( respostaObjecto );
    var temperaturas = [];
    respostaObjecto.data.forEach(element => {
        var temp = [];
        temp.push(element.globalIdLocal);
        temp.push(element.tMin);
        temp.push(element.tMax);
        console.log("id : " + element.globalIdLocal)
        console.log("min: " + element.tMin)
        console.log("max: " + element.tMax)
        temperaturas.push(temp);
        // escrever(element);

    });
    //var temperaturas = [
    console.log(temperaturas);

    function escrever(params) {
        var temp = "<ul>";
        temp += ("<li><strong>id</strong> : " + params.globalIdLocal + "</li>")
        temp += ("<li><strong>min</strong> : " + params.tMin + "</li>")
        temp += ("<li><strong>max</strong> : " + params.tMax + "</li>")
        temp += "</ul>"
        document.getElementById("temps").innerHTML = temp;
    }

    function escreverTbl() {
        var temp = '<table id="customers"><tr><th>id</th><th>min</th><th>max</th></tr>'
        temperaturas.forEach(element => {
            temp += ("<td>" + element[0] + "</td>")
            temp += ("<td>" + element[1] + "</td>")
            temp += ("<td>" + element[2] + "</td></tr>")
        })
        temp += '</table>'
        document.getElementById("temps").innerHTML += temp;
    }
    escreverTbl();
}
/*
for( var i=0; i < temperaturas.length; i++ )
{
    console.log( temperaturas[i] );
}
*/