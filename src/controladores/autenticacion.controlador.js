import { 
        mdlgetUsuarios,
        mdlBuscarUsuario
} from '../modelos/autenticacion.modelo.js';

import { 
    esNombre, 
    esDescripcion, 
    esStock, 
    esPrecio, 
    esCategoria,
    encriptarPass,
    generarToken 
} from "../funciones.js";

//                                                      GET
export const ctrlLogin = async (req, res) => {

    let { usuario, password } = req.body;
    usuario = usuario.toLowerCase();
    const buscado = await mdlBuscarUsuario(usuario);
    if (!buscado) {
        res.status(404).json({ error: "No Existe el Usuario: " + usuario });
    } else {

        res.json(buscado);
    }
};


export const  ctrlgetUsuarios = async (req, res) => {    
    const usuarios = await mdlgetUsuarios();
    if (usuarios) {
        res.json(usuarios); 
    } else {
        res.status(404).json({ error: "No Se pudieron cargar los usuarios"});
    } 
};