import { 
        ctrlmsjBienvenida,
        ctrlgetProductos,
        ctrlgetProductosID, 
        ctrlgetProductosBuscar, 
        ctrlcrearProducto,
        ctrlmodificarProducto,
        ctrlborrarProducto
} from '../controladores/productos.controlador.js';

import express from 'express';
import { 
        autenticacion, 
        verificarRol 
} from '../middlewares/autenticacion.js';

const rutas = express.Router();


// Ruta GET /
rutas.get('/',ctrlmsjBienvenida);
// Ruta GET /productos
rutas.get('/productos', ctrlgetProductos);
// Ruta GET /productos/buscar
rutas.get("/productos/buscar", ctrlgetProductosBuscar);
// Ruta GET /productos/:id
rutas.get('/productos/:id', ctrlgetProductosID);
// POST 
// Ruta POST /productos
rutas.post('/productos',ctrlcrearProducto);
// PATH
// Se utiliza para modificar un campo no el registro completo.
// PUT 
// Ruta PUT /productos/:id
rutas.put('/productos/:id',ctrlmodificarProducto);
// DELETE
// Ruta DELETE /productos/:id
rutas.delete("/productos/:id", autenticacion, verificarRol("admin", "user"), ctrlborrarProducto);

export default rutas;