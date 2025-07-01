import { db } from '../data/data.js';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where
} from 'firebase/firestore';

const coleccionProductos = collection(db, "productos");

// Método para obtener todos los productos 
export async function mdlgetProductos() { 
  try {
    const querySnapshot = await getDocs(coleccionProductos); 
    const productos = []; 
    querySnapshot.forEach((doc) => { 
        productos.push({ id: doc.id, ...doc.data() }); 
    });
    return productos;     
  } catch (error) {
    return null
  }
};
// Método para buscar un producto por su ID 
export async function mdlgetProductosID(id) { 
  try {
    const productoDoc = await getDoc(doc(coleccionProductos, id)); 
    if (productoDoc.exists()) { 
        return productoDoc.data(); 
    } else { 
        return null; 
    } 
  } catch (error) {
    return null;
  }  
};
// Método para obtener un producto segun un campo dado 
export async function mdlgetProductosBuscar (campo, valor){
  try {
      const consulta = query(coleccionProductos, where(campo, "==", valor));
      const productos = await getDocs(consulta);
      if (productos.empty) {
        return [];
      }
      const resultados = [];
      productos.forEach(doc => {
        resultados.push({ id: doc.id, ...doc.data() });
      });
      return resultados;
  } catch (error) {
      console.error("Error buscando productos:", error);
      throw new Error("Error al buscar productos");
  }
};
// Método para guardar un producto en Firestore 
export async function mdlGuardarProducto(producto) {       
  await addDoc(coleccionProductos, producto); 
};
// Método para Modificar un producto en Firestore 
export async function mdlModificarProducto(id, datos) {
  const ref = doc(coleccionProductos, id);  
  await updateDoc(ref, datos);
};
// Método para eliminar un producto por su ID 
export async function mdlborrarProducto(id) { 
    const producto = await mdlgetProductosID(id);
    if (!producto) {
      throw new Error("No existe el Producto a eliminar");
    }
    await deleteDoc(doc(coleccionProductos, id));
};