proyecto_nodejs


Api REST 

servidor que responde a las siguientes consultas.

                                                            GET            
http://localhost:3000/api

Da un mensaje de bienvenida.

http://localhost:3000/api/productos

Devuelve toda la coleccion

http://localhost:3000/api/productos/:id

Devuelve el producto que coincida con el id

http://localhost:3000/api/productos/buscar?{campo}={valor}

Devuelve el producto que coincida con el campo y valor dado

Ej:
  http://localhost:3000/api/productos/buscar?nombre=licuado de fresa

  http://localhost:3000/api/productos/buscar?categoria=Tragos

                                                            POST
http://localhost:3000/api/productos

body:
    { 
        "nombre": "dfsdf",	        
        "descripcion": "Fernet con coca cola", 	                            
        "stock": 2,	
        "precio": 7,	    
        "categoria": "Tragos"
    }

Verifica el correcto ingreso de datos,
luego guarda en la base de datos.
                                                            PUT
http://localhost:3000/api/productos/:id

body:
    { 
        "nombre": "dfsdf",
        "precio": 7,	    
        "categoria": "Tragos"
    }
    
Modifica el producto que coincida con el ID dado.
Solo modifica los campos dados.


                                                           DELETE
http://localhost:3000/api/productos/:id

Borra el producto que coincida con al ID dado.


Usuarios:
        usuario:  christian
        password: chris123
        rol:      admin

        usuario:  paul
        password: paul1234
        rol:      user

Nota: El usuario "admin" puede consultar, editar eliminar y crear productos.
      El usuario "user" solo puede listar consultar productos