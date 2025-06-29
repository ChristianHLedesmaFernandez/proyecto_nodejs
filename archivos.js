// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from "firebase/app";
// TODO: Agregar SDK para los productos de Firebase que desea utilizar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase de su aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyC-CGDzUEpVdkwNM-HT3Ioq16bif3tPe2g",
  authDomain: "api-rest-node-js-data-3357f.firebaseapp.com",
  projectId: "api-rest-node-js-data-3357f",
  storageBucket: "api-rest-node-js-data-3357f.firebasestorage.app",
  messagingSenderId: "558482325500",
  appId: "1:558482325500:web:80f3807e59f6f4defcbc79"
};

// Iniciallizar Firebase
const app = initializeApp(firebaseConfig);