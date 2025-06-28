import fs from 'fs';


const data = fs.readFileSync (".../productos.txt", "utf8");

console.log(data);
const productos = JSON.parse(data); 


console.log(productos)