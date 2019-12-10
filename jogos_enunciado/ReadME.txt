Para arrancar com o JSON-SERVER:

	json-server --watch jornada16.json

Tendo o JSON-SERVER a funcionar, pode usar os seguintes URL:

http://localhost:3000/jogos     		GET - obter todos os jogos
http://localhost:3000/jogos/7		        GET - obter os dados do jogo com o id 7
http://localhost:3000/jogos/7 			PUT - actualizar os dados do jogo com o id 7



Comando para encontrar o caminho para o json-server:
npm list -g --depth 0 
