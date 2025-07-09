import { 
        mdlgetUsuarios,
        mdlBuscarUsuario
} from '../modelos/autenticacion.modelo.js';

import { 
    encriptarPass,
    generarToken, 
    comparaPass
} from "../funciones.js";

export const ctrlLogin = async (req, res) => {
    let { usuario, password } = req.body;
    usuario = usuario.toLowerCase();
    const buscado = await mdlBuscarUsuario(usuario);
    if (!buscado) {
        res.status(404).json({ error: "No Existe el Usuario: " + usuario });
    } else {
        if (await comparaPass(password,  buscado.password )){            
            const tokenJWT = generarToken(buscado);
            res.status(200).json({
                mensaje: "Inicio de sesión exitoso",
                usuario: usuario,
                rol: buscado.rol,
                token: tokenJWT  // si estás usando JWT
            });
        } else {            
            res.status(401).json({ error: "Error de Credenciales" });
        }
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