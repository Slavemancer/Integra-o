/* CRUD_Aluno.js */

var bd = "http://localhost:3000/alunos/";

var operacao;

class Aluno {
    constructor(num, nomeProprio, apelido, email, telemovel) {
        this.numero = num;
        this.primeiroNome = nomeProprio;
        this.apelido = apelido;

        this.contactos = {};
        this.contactos.email = email;
        this.contactos.telemovel = telemovel;
    }

}


window.addEventListener('DOMContentLoaded', initApp);


// Inicializa a aplicação
function initApp() {
    console.log("Init App!! ");

    // Definir a reacção ao evento 'click' nos botões que estão dentro 
    // do elemento com o id 'crud'
    var botoes = document.querySelectorAll('#crud button');
    botoes.forEach(function(button) {
        button.addEventListener('click', clickBotao);
    });


    // A submissão da form só acontece quando estiverem preenchidos 
    // os requisitos de validação do formulário
    var form = document.querySelector('form');
    form.addEventListener('submit', executarOperacao);

    form.addEventListener('reset', limparFeedback);
}

// Event Handler do 'click' num dos botões CRUD
function clickBotao(evt) {
    var botaoClickado = this;
    var botaoId = botaoClickado.getAttribute('id');

    console.log('Click no botão', botaoId);

    // var operacao é global
    operacao = botaoId;
}

// Event Handler do 'submit' da form 
function executarOperacao(evt) {
    console.log('Form Submit');
    // 	anular a submissão automática da form
    evt.preventDefault();
    switch (operacao) {
        case 'create':
            criarAluno();
            break;
        case 'read':
            lerAluno();
            break;
        case 'update':
            actualizarAluno();
            break;
        case 'delete':
            apagarAluno();
            break;

    }


}

// Event Handler do 'reset' da form 
function limparFeedback() {
    var pFeedback = document.querySelector('#feedback');
    pFeedback.textContent = "";
}


/* ----------------    CREATE    Criar Aluno    POST ----------------- */

function criarAluno() {
    inputAluno();
    console.log('CREATE aluno!! \n');
}




/* ----------------   READ     Ler Aluno    GET ----------------- */
async function lerAluno() {
    idAluno = document.querySelector("#numero").value;
    response = await fetch(bd + idAluno).then(response => {

        feedback(response.status, response.statusText);
        if (response.ok) {
            return response.json();
        } else {
            return new Aluno(0, "", "", "", "");
        }

    }).then(
        data => outputAluno(data)
    );

    console.log('READ aluno!! ');
}



/* ----------------  UPDATE   Actualizar Aluno  PUT ----------------- */

async function actualizarAluno() {

    var txtNumero = document.querySelector('#numero');
    var txtProprio = document.querySelector('#proprio');
    var txtApelido = document.querySelector('#apelido');
    var txtEmail = document.querySelector('#email');
    var txtTelemovel = document.querySelector('#telemovel');

    // Ler os valores nas caixas de texto
    var numero = txtNumero.value;
    var proprio = txtProprio.value;
    var apelido = txtApelido.value;
    var email = txtEmail.value;
    var telemovel = txtTelemovel.value;

    // Criar um novo objecto da classe Aluno
    var aluno = new Aluno(numero, proprio, apelido, email, telemovel);

    await fetch(bd + numero, {

        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
    });
    console.log('UPDATE aluno!! ');
}




/* ----------------  DELETE   Apagar Aluno  DELETE ----------------- */

async function apagarAluno() {

    // Seleccionar as caixas de texto 
    var txtNumero = document.querySelector('#numero');

    // Ler os valores nas caixas de texto
    var numero = txtNumero.value;

    // Criar um novo objecto da classe Aluno

    await fetch(bd + numero, {

        method: "DELETE"
    });

    console.log('DELET aluno!! ');
}






/* ----------   Funções Auxiliares   ----------------- */

/* Retorna um novo objecto da classe aluno
   com base nos valores presentes no formulário
*/
async function inputAluno() {
    // Seleccionar as caixas de texto 
    var txtNumero = document.querySelector('#numero');
    var txtProprio = document.querySelector('#proprio');
    var txtApelido = document.querySelector('#apelido');
    var txtEmail = document.querySelector('#email');
    var txtTelemovel = document.querySelector('#telemovel');

    // Ler os valores nas caixas de texto
    var numero = txtNumero.value;
    var proprio = txtProprio.value;
    var apelido = txtApelido.value;
    var email = txtEmail.value;
    var telemovel = txtTelemovel.value;

    // Criar um novo objecto da classe Aluno
    var aluno = new Aluno(numero, proprio, apelido, email, telemovel);

    await fetch(bd, {

        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
    });

    // Retornar o objecto aluno
    return aluno;
}

/* Actualiza as caixas de texto do formulário
   a partir dos dados do objecto da classe aluno
*/
function outputAluno(aluno) {
    var txtProprio = document.querySelector('#proprio');
    var txtApelido = document.querySelector('#apelido');
    var txtEmail = document.querySelector('#email');
    var txtTelemovel = document.querySelector('#telemovel');

    txtProprio.value = aluno.primeiroNome;
    txtApelido.value = aluno.apelido;
    txtEmail.value = aluno.contactos.email;
    txtTelemovel.value = aluno.contactos.telemovel;
}


function feedback(status, statusText) {
    var pFeedback = document.querySelector('#feedback');

    switch (status) {
        case 200: // 200 OK
            pFeedback.textContent = operacao + ": " + statusText;
            break;

        case 201: // 201 Criado
            pFeedback.textContent = 'Aluno Criado!';
            break;

        case 404: // 404 Not Found
            pFeedback.textContent = 'Aluno com esse número não foi encontrado!';
            break;

        case 500: // 500 Internal Server Error 
            pFeedback.textContent = statusText;
            break;

        default:
            pFeedback.textContent = operacao + ": " + statusText;
            break;
    }

    if (status >= 200 && status < 300) {
        pFeedback.removeAttribute('class');
    } else {
        pFeedback.setAttribute('class', 'erro');
    }

}