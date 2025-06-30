import { 
        mdlgetProductos,
        mdlgetProductosID, 
        mdlgetProductosBuscar, 
        mdlGuardarProducto,
        mdlborrarProducto
} from '../modelos/productos.modelos.js';
import { 
    esNombre, 
    esDescripcion, 
    esStock, 
    esPrecio, 
    esCategoria 
} from "../funciones.js";

//                                                      GET
export const  ctrlmsjBienvenida = async (req, res) => {
    res.send("Proyecto Final Curso NODE JS\nChristian H. Ledesma Fernandez");
 };
export const  ctrlgetProductos = async(req, res) => {    
    const productos = await mdlgetProductos();
    if (productos) {
        res.json(productos); 
    } else {
        res.status(404).json({ error: "No Se pudieron cargar los productos"});
    } 
};
export const  ctrlgetProductosID = async (req, res) => {      
    const producto = await mdlgetProductosID(req.params.id);  
    if (!producto) {
        res.status(404).json({ error: "No existe el producto"});
    }     
    res.json(producto);   
};
export const  ctrlgetProductosBuscar = async (req, res) => {
    let buscado = [];
    let msj = "";
    let resultado = true;    
    const campo = Object.keys(req.query)[0];
    let valor = req.query[campo];
    try {            
        switch (campo) {
            case "nombre":
                valor = valor.toLowerCase();
                valor = valor.charAt(0).toUpperCase() + valor.slice(1);
                //valor = valor      
                esNombre(valor);
                break;
            case "descripcion":
                valor = valor.toLowerCase();
                valor = valor.charAt(0).toUpperCase() + valor.slice(1);
                //
                esDescripcion(valor);
                break;
            case "stock":
                valor = Number(valor);
                esStock(valor);                
                break;
            case "precio":
                valor = Number(valor);
                esPrecio(valor);
                break;
            case "categoria":
                valor = valor.toLowerCase();
                valor = valor.charAt(0).toUpperCase() + valor.slice(1);
                //
                esCategoria(valor);          
                break;
            default:
                msj = "el campo a buscar no corresponde a un campo valido!";
                resultado = false;
            }
    } catch (e) {
        resultado = false;
        msj =  e.message;            
    }
    if (resultado) {
        try {
        buscado = await mdlgetProductosBuscar(campo, valor);
        if (buscado.length === 0) {
            res.status(404).json({ error: "No se encontraron coincidencias." });
        } else {
            res.json(buscado);
        }
        } catch (e) {
        console.error("Error al buscar productos:", e);
        res.status(500).json({ error: "Error interno al buscar productos." });
        }
    } else {
        res.status(400).json({ error: msj });
    }
};
//                                                      POST
export const ctrlcrearProducto = async (req, res) => {
    const { id, nombre, descripcion, stock, precio, categoria } = req.body;
    const nuevoProducto = {       
        nombre,
        descripcion,
        stock,
        precio,
        categoria
    }
    //
    console.log(nuevoProducto)
    //
    const producto = await mdlGuardarProducto(nuevoProducto);

    
    res.status(201).json(producto);
}


//                                                      PUT
export const ctrlmodificarProducto = async (req, res) => {
    const productoId = parseInt (req.params.id, 10); // pasando a Base 10
    const productoIndex = productos.findIndex((item) => item.id === productoId);
    
    if (productoIndex === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }
    const { nombre, precio } = req.body;
    productos[productoIndex] = { id: productoId, nombre, precio};
    console.log(productos[productoIndex]);
    res.json(productos[productoIndex]);
 }

//                                                      DELETE
export const ctrlborrarProducto = async(req, res) => {
  const productoId = req.params.id;

 
  /*
  if (productoId === -1) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  */
  const producto = await mdlborrarProducto(productoId);
  
  res.status(204).send();
}