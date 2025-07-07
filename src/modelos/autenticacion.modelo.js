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

const coleccionUsuarios = collection(db, "usuarios");

// Método para obtener todos los Usuarios 
export async function mdlgetUsuarios() { 
  try {
    const querySnapshot = await getDocs(coleccionUsuarios); 
    const usuarios = []; 
    querySnapshot.forEach((doc) => { 
        usuarios.push({ id: doc.id, ...doc.data() }); 
    });
    return usuarios;     
  } catch (error) {
    return null
  }
};
// Método para buscar Usuario por su usename
export async function mdlBuscarUsuario(valor) { 
  try {
    const consulta = query(
      coleccionUsuarios,
      where("usuario", "==", valor)
    );
    const usuario = await getDocs(consulta);
    if (usuario.empty) {
      return null;
    }
    const doc = usuario.docs[0];
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    console.error("Error buscando usuario:", error);
    throw new Error("Error al buscar usuario");
  }
};