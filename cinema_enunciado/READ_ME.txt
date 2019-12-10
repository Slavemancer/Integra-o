Para arrancar com o JSON-SERVER:

	json-server --watch filmes.json

Tendo o JSON-SERVER a funcionar, pode usar os seguintes URL:

	- http://localhost:3000/filmes      			Um GET permite obter os dados dos filmes

	- http://localhost:3000/filmes/tt0417741		Um GET permite obter os dados do filme com o id tt0417741

	- http://localhost:3000/filmes/tt0417741/comentarios	Um GET permite obter os coment�rios do filme com id tt0417741
								Um POST permite criar mais um coment�rio ao filme id tt0417741


// ----------------------                --------------
Classe Date

  Constructor:
	new Date()		-  the constructor creates a JavaScript Date object for the CURRENT date and time ...
	new Date(dateString)	-  dateString value representing a date
  M�todos:
	toLocaleDateString()
	toLocaleTimeString()	
	