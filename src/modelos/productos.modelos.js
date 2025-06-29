import { db } from '../data/data.js';

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';

const coleccionProductos = collection(db, "productos");

// Método para buscar un producto por su ID 
export async function getProductById(id) { 
   const productoDoc = await getDoc(doc(coleccionProductos, id)); 
   if (productoDoc.exists()) { 
       return productoDoc.data(); 
   } else { 
       return null; 
   } 
 }; 

 // Método para obtener todos los productos 
 export async function mdlgetProductos() { 
   const querySnapshot = await getDocs(coleccionProductos); 
   const productos = []; 
   querySnapshot.forEach((doc) => { 
       productos.push({ id: doc.id, ...doc.data() }); 
   });
   console.log(productos)
   return productos; 
 }; 

 // Método para guardar un producto en Firestore 
 export async function saveProduct(product) { 
   await addDoc(coleccionProductos, product); 
 }; 

 // Método para eliminar un producto por su ID 
 export async function mdlborrarProducto(id) { 

    //
  console.log(id)
  //
   //await deleteDoc(doc(coleccionProductos, id)); 
 };

