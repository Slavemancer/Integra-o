function gerarNumeros(quantos = 0, min = 1, max = 1) {
    var ns = new Array();
    var n;
    for (let index = 0; index < quantos; index++) {

        n = Math.floor(Math.random() * max) + min;
        if (ns.indexOf(n) < 0) {
            ns.push(n);
        } else {
            // console.log(n);
            index--;
        }
    }
    return ns.sort();

}

//console.log(gerarNumeros(5, 1, 50));
//console.log(gerarNumeros(2, 1, 12));
module.exports.gerar = gerarNumeros;