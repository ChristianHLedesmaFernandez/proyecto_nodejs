import fs from 'fs';

export const mdlgetProductos = () => {
    try {
        const data = fs.readFileSync ("./productos.txt", "utf8"); // Sincronica bloquea la ejecucion hasta terminar
     //fs.readFile('./productos.txt', 'utf8', (err, data) => { 
        /*
        if (err) { 
            console.error('Error al leer el archivo:', err); 
        return false; 
        }
        */
        const productos = JSON.parse(data);
        return productos
    } catch (error) {
        return false;
    }
   
       
    //});     
};

