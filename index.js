import express from "express";
const app = express();

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

//

// Middleware de aplicación
app.use((req, res, next) => {
    console.log(`Datos recibido: ${req.method} ${req.url}`);
    next(); // Pasa el control al siguente middleware o ruta
});

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send("Hola Soy tu servidor Express respondiendo un GET");
});


/*
*/


app.get('/productos', (req, res) => { 
    res.json(productos); 
});


app.get('/productos/:id', (req, res) => { 
    const producto = productos.find((item) => item.id == req.params.id);
    console.log(req.params.id)
    res.json(producto); 
});


const PORT = 3000;

app.listen(PORT, () => {

    console.log(`http://localhost:${PORT}`);

});
