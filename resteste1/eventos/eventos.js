/* eventos.js */

window.addEventListener("DOMContentLoaded", init );



function init()
{
	console.log("Init");
	barra=document.querySelector("#controle");
	barra.addEventListener("input",alterar);
	inptText=document.querySelector("#cxTexto");
	inptText.addEventListener("input",espelhar);
}

function espelhar(){
	espelho=document.querySelector("#espelho");
	espelho.innerHTML=document.querySelector("#cxTexto").value;
}

function alterar(){
	inptText=document.querySelector("#cxTexto");
	espelho=document.querySelector("#espelho");
	espelho.style.width=this.value+"%";
	inptText.style.width=this.value+"%";
}