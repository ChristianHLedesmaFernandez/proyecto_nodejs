import { 
        mdlgetProductos
} from '../modelos/productos.modelos.js'; 

//                                                      GET
export const  ctrlmsjBienvenida = async (req, res) => {
    res.send("Hola Soy tu servidor Express respondiendo un GET");
};
export const  ctrlgetProductos = async(req, res) => { 
    
    const productos = mdlgetProductos();
    if (productos) {
        res.json(productos); 
    } else {
        res.status(404).json({ error: "No Hay el producto"});
    }
        
    
    
};
export const  ctrlgetProductosID = async (req, res) => { 
    const producto = productos.find((item) => item.id == req.params.id);
    if (!producto) {
        res.status(404).json({ error: "No existe el producto"});
    }     
    res.json(producto);    
};
export const  ctrlgetProductosBuscar = async (req, res) => {
    
    const clave =  Object.keys(req.query);
    let buscado = [];
    console.log(clave[0])
    switch (clave[0]) {
        case "nombre":
            console.log("buscar por nombre")
            const {nombre} = req.query;
            buscado = productos.filter((item) => 
            item.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase())); 
            break;
        case "precio":
            console.log("buscar por Precio")
            const {precio} = req.query;
            buscado = productos.filter((item) => item.precio === Number(precio)); // coincidencia excta
               // item.precio.toString().includes(precio)); 
            
            break;
    }

    
       
    res.json(buscado);


};

//                                                      POST
export const ctrlcrearProducto = async (req, res) => {
    const { nombre, precio } = req.body;
    const nuevoProducto = {
        id: productos.length +1,
        nombre,
        precio
    }
    productos.push(nuevoProducto);
    console.log(productos)
    res.status(201).json(nuevoProducto);
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
  const productoId = parseInt(req.params.id, 10);
  const productoIndex = productos.findIndex((p) => p.id === productoId);
  if (productoIndex === -1) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  productos.splice(productoIndex, 1);
  res.status(204).send();
}