import jwt from 'jsonwebtoken'; 
import bcrypt from "bcrypt";    // Libreria para Encriptar la contraseña
import 'dotenv/config'; 



const secret_key = process.env.JWT_SECRET_KEY; 


// Función para generar un token JWT 
export const generarToken = (userData) => { 
  const user = {id: userData.id, email: userData.email, rol: userData.rol};   // datos del usuario
  const expiration = { expiresIn: '1h' };                                     // tiempo de expiracion 
  return jwt.sign(user, secret_key, expiration);                              // Generando Token
};
// Encriptar Password
export const encriptarPass = (password) => {
  let passwordHash = bcrypt.hashSync(password, 8);
return passwordHash;
};

// Comparar Contraseña
export const comparaPass = (password, password2) => {

  if( password == password2){
    return true;
  } else{
    return false
  }
};


// Funciones auxiliares
const expresiones = {  
  nombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/,          // Solo letras, ñ, acentos, espacios
  categoria: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/,       // Solo letras, ñ, acentos, espacios
  descripcion: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/   // Solo letras, ñ, acentos, espacios y números
};

export const esNombre = (valor) => {
  if (typeof valor !== "string" || valor.trim() === "") {
    throw new Error("El nombre debe ser un texto no vacío.");
  }  
  if (!expresiones.nombre.test(valor)) {
    throw new Error("El nombre solo puede contener letras, acentos y ñ.");
  }
};
export const esDescripcion = (valor) => {
  if (valor === null) return;
  if (typeof valor !== "string") {
    throw new Error("La descripción debe ser texto o nulo.");
  }
  if (!expresiones.descripcion.test(valor)) {
    throw new Error("La descripción solo puede contener letras, acentos y ñ.");
  }
};
export const esStock = (valor) => {
  if (typeof valor !== "number" || !Number.isInteger(valor) || valor < 0) {
    throw new Error("El stock debe ser un número natural.");
  }
};
export const esPrecio = (valor) => {
  if (typeof valor !== "number" || Number.isNaN(valor) || valor < 0) {
    throw new Error("El precio debe ser un número positivo válido.");
  }
  if (Math.round(valor * 100) / 100 !== valor) {
    throw new Error("El precio debe tener como máximo dos decimales.");
  }
};
export const esCategoria = (valor) => {
  if (typeof valor !== "string" || valor.trim() === "") {
    throw new Error("La categoría debe ser un texto no vacío.");
  }
  if (!expresiones.categoria.test(valor)) {
    throw new Error("La categoría solo puede contener letras, espacios, ñ y acentos.");
  }
};