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
        "nombre": "Fernet con Coca",	        
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

Nota: El usuario "admin" puede listar, consultar por ID o buscar por campos, editar, eliminar y crear productos.
      El usuario "user" solo puede listar y consultar por ID productos.
      Sin login solo puede listar los productos.

GET 

http://localhost:3000/autenticacion/usuarios

Para verificar los usuarios que estan en la base (Solo para control y verigicar los datos dentro de la coleccion Usuarios).


POST 
http://localhost:3000/autenticacion/login

body:
    { 
        "usuario": "christian",
        "passsword": "chris123"
    }

Loguearse, genera el token JWT



