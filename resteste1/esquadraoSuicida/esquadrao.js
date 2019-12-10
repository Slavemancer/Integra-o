/* esquadrao.js */

window.addEventListener('DOMContentLoaded', initApp );
const URL="http://127.0.0.1:8887/esquadrao.json";


function initApp()
{
	
	console.log("initApp");
	var data = fetch(URL)
        .then(res => res.json())
        .then((data) => {
			console.log("Membros do "+data.squadName);
			for (const membro of data.members) {
				console.log(membro.name);
				console.log("\tIdentidade Secreta: "+membro.secretIdentity);
				console.log("\tPoderes");
				for (const poder of membro.powers) {
					console.log("\t\t"+poder);
				}
			}
        })
        .catch(err => { throw err });
	
}

function escrever(){
	console.log(this);
}
