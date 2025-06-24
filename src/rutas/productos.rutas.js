import express from 'express';
const rutas = express.Router();


// Lista de Prueba
const productos = [
                {id: 1,   nombre: "Cafe con leche",           precio: 12}, 
                {id: 2,   nombre: "Capuchino",                precio: 8}, 
                {id: 3,   nombre: "Media Luna",               precio: 19890}, 
                {id: 4,   nombre: "Tostado de JyQ",           precio: 100}, 
                {id: 5,   nombre: "Te",                       precio: 8},
                {id: 6,   nombre: "Licuado de Frutos Rojos",  precio: 182}, 
                {id: 7,   nombre: "Jugo de Limon",            precio: 48},
                {id: 8,   nombre: "Mil Hojas",                precio: 98},
                {id: 9,   nombre: "Panini",                   precio: 190}, 
                {id: 10,  nombre: "Torta de Ricota",          precio: 100}, 
                {id: 11,  nombre: "Te Negro",                 precio: 8},
                {id: 12,  nombre: "Selva Negra",              precio: 56},
                {id: 13,  nombre: "Te con leche",             precio: 15}, 
                {id: 14,  nombre: "Cortado",                  precio: 8}, 
                {id: 15,  nombre: "Lemon Pie",                precio: 19890}, 
                {id: 16,  nombre: "Media Luna de JyQ",        precio: 100}, 
                {id: 17,  nombre: "Moca",                     precio: 12}, 
                {id: 18,  nombre: "Submarino",                precio: 8},
                {id: 19,  nombre: "Red Velvet",               precio: 890}, 
                {id: 20,  nombre: "Pebete de JyQ",            precio: 100}, 
                {id: 21,  nombre: "Licuado",                  precio: 8},
                {id: 22,  nombre: "Torta de Ricota",          precio: 28}             
                ]

//                                                        GET
// Ruta GET /
rutas.get('/', (req, res) => {
    res.send("Hola Soy tu servidor Express respondiendo un GET");
});

// Ruta GET /productos
rutas.get('/productos', (req, res) => { 
    res.json(productos); 
});

// Ruta GET /productos/buscar
rutas.get("/productos/buscar", (req, res) => {
    const {nombre} = req.query;
    const buscado = productos.filter((item) => 
        item.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase()));    
    res.json(buscado);
})

// Ruta GET /productos/:id
rutas.get('/productos/:id', (req, res) => { 
    const producto = productos.find((item) => item.id == req.params.id);
    if (!producto) {
        res.status(404).json({ error: "No existe el producto"});
    }     
    res.json(producto);    
});



// POST 

rutas.post('/productos', (req, res) => {
    const { nombre, precio } = req.body;
    const nuevoProducto = {
        id: productos.length +1,
        nombre,
        precio
    }
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

// PATH
// Se utiliza para modificar un campo no el registro completo.

// PUT 

rutas.put('/productos/:id', (req, res) => {
    const productoId = parseInt (req.params.id, 10); // pasando a Base 10
    const productoIndex = productos.findIndex((item) => item.id === productoId);
    
    if (productoIndex === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }
    const { nombre, precio } = req.body;
    productos[productoIndex] = { id: productoId, nombre, precio};
    console.log(productos[productoIndex]);
    res.json(productos[productoIndex]);
 });

// DELETE
rutas.delete("/productos/:id", (req, res) => {
  const productoId = parseInt(req.params.id, 10);
  const productoIndex = productos.findIndex((p) => p.id === productoId);

  if (productoIndex === -1) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  productos.splice(productoIndex, 1);

  res.status(204).send();
});



export default rutas; 