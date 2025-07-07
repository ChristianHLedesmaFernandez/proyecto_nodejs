import { 
        ctrlgetUsuarios,
        ctrlLogin
} from '../controladores/autenticacion.controlador.js';

import express from 'express';

const rutas = express.Router();

// Ruta Get/usuarios
rutas.get("/usuarios", ctrlgetUsuarios)

// Ruta Post/login 
rutas.post("/login", ctrlLogin)

export default rutas;