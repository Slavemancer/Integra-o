const gerarAposta = require("./apostaSimplex_Teste");
const fs = require("fs");
var apostas = [];
var quantas = 10;
for (let index = 0; index < quantas; index++) {
    apostas.push(gerarAposta());

}
fs.appendFile('aposta.json', JSON.stringify(apostas),
    (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Ficheiro gravado com sucesso");
        }
    }
);