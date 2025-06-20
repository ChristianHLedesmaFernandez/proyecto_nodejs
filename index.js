import express from "express";
const app = express();

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
app.get('/productos', (req, res) => { 
res.send('Bienvenid@ a la página de productos'); 
}); 
app.get('/productos/14', (req, res) => { 
res.send('Estás viendo el producto N° 14.'); 
}); 
*/

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`http://localhost:${PORT}`);

});
