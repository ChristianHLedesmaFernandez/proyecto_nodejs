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

                                                            PUT
                                                            
                                                           DELETE
