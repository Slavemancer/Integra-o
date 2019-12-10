/* dynamic.js */

var alunos = [ 
				{
				 numero:"180100288",
				 nome:"André Vieira"
			    },
			    {
				 numero:"180100325",
				 nome:"André Ribeiro"
			    },
			    {
				 numero:"180100339",
				 nome:"Bernardo Guerra"
			    },
			    {
				 numero:"170100256",
				 nome:"Bruno Bernardo"
			    },
			    {
				 numero:"180100280",
				 nome:"Carolina Timóteio"
			    },
			    {
				 numero:"180100290",
				 nome:"Daniel Azevedo"
			    },
			    {
				 numero:"180100408",
				 nome:"Daniel Ribeiro"
			    },
			    {
				 numero:"180100319",
				 nome:"Diogo Silva"
			    },
			    {
				 numero:"170100188",
				 nome:"Francisco Coimbra"
			    },
			    {
				 numero:"180100327",
				 nome:"Hugo Duarte"
			    }
			 ];


window.addEventListener("DOMContentLoaded", initApp );

function initApp()
{
	console.log("Init App");

	construirPauta();

}

function construirPauta()
{
	
	/* Construir pauta respeitando o HTML Objectivo (HTML_Objectivo.html)
	   A partir dos dados que estão no array alunos	
	*/

	lista=document.querySelector("ul");
	for (let aluno of alunos) {
		checkbox=document.createElement("input");
		checkbox.type="checkbox";
		li=document.createElement("li");
		spanNum=document.createElement("span");
		spanNum.setAttribute("class","numero");
		spanNum.innerText=aluno.numero;
		spanNome=document.createElement("span");
		spanNome.setAttribute("class","nome");
		spanNome.innerText=aluno.nome;
		li.append(spanNum,spanNome,checkbox);
		lista.append(li);
	}
	
}

