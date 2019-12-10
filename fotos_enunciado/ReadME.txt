Para arrancar com o JSON-SERVER:

	json-server --watch fotos.json

Tendo o JSON-SERVER a funcionar, pode usar os seguintes URL:

http://localhost:3000/fotos     		GET - obter todas as fotos 
http://localhost:3000/fotos/d9f59f64fc		GET - obter os dados da foto com o id d9f59f64fc 


http://localhost:3000/fotos/d9f59f64fc/likes	GET - obter os likes dados à foto com o id d9f59f64fc 
http://localhost:3000/fotos/d9f59f64fc/likes    POST - adicionar like
http://localhost:3000/fotos/d9f59f64fc/likes




http://localhost:3000/usernames/RoniRoni/likes     GET - obter as fotos likadas pelo user RoniRoni






