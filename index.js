import express from "express";
import cors from 'cors'
import rutasProductos from './src/rutas/productos.ruta.js';
import rutasAutenticacion from './src/rutas/autenticacion.ruta.js';


const app = express();

/*
app.use((req, res, next) => {
    res.json({ message: "En mantenimiento" });
    next();
});
*/

app.use(cors()); // Permitir origenes crusados.
//app.use(express.static("public"));
app.use(express.json());


// Uso del router en la ruta /api/products
app.use('/autenticacion', rutasAutenticacion);


// Uso del router en la ruta /api/products
app.use('/api', rutasProductos);


// midelware
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
