# 🧩 API REST - Proyecto Node.js

Servidor desarrollado con **Node.js** y **Express**, conectado a **Firebase** (Firestore), que expone una API REST para la gestión de productos.

---

## 📦 Funcionalidades

- Listado completo de productos
- Búsqueda por ID o campo personalizado
- Alta, modificación y eliminación de productos
- Autenticación con JWT
- Control de acceso por roles (`admin`, `user`, anónimo)

---

## 🚀 Instalación y ejecución local

1. Clonar el repositorio:

```bash
git clone https://github.com/ChristianHLedesmaFernandez/proyecto_nodejs.git
cd proyecto_nodejs
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno (Firebase, JWT, etc.)

4. Ejecutar el servidor en modo desarrollo:

```bash
npm run dev
```

---

## 🌐 Endpoints de la API

### 📍 Ruta base

```
GET /api
```
**Respuesta:** Mensaje de bienvenida.

---

### 📋 Productos

#### ✅ Obtener todos los productos

```
GET /api/productos
```

#### 🔎 Buscar producto por ID

```
GET /api/productos/:id
```

#### 🔍 Buscar producto por campo

```
GET /api/productos/buscar?{campo}={valor}
```

**Ejemplos:**

- `/api/productos/buscar?nombre=licuado de fresa`
- `/api/productos/buscar?categoria=Tragos`

---

#### ➕ Crear producto

```
POST /api/productos
```

**Body (JSON):**

```json
{
  "nombre": "Fernet con Coca",
  "descripcion": "Fernet con coca cola",
  "stock": 2,
  "precio": 7,
  "categoria": "Tragos"
}
```

Valida los datos y guarda el producto en la base.

---

#### ✏️ Editar producto

```
PUT /api/productos/:id
```

**Body (ejemplo):**

```json
{
  "nombre": "dfsdf",
  "precio": 7,
  "categoria": "Tragos"
}
```

Modifica solo los campos enviados del producto indicado por ID.

---

#### 🗑️ Eliminar producto

```
DELETE /api/productos/:id
```

Elimina el producto con el ID especificado.

---

## 👤 Autenticación

### 🔍 Ver usuarios (uso interno)

```
GET /autenticacion/usuarios
```

Permite ver los usuarios almacenados en la base de datos (solo con fines de prueba).

---

### 🔐 Login

```
POST /autenticacion/login
```

**Body (JSON):**

```json
{
  "usuario": "christian",
  "passsword": "********"
}
```

Devuelve un token JWT si las credenciales son válidas.

---

## 🛡️ Control de Acceso

| Usuario   | Contraseña | Rol   | Permisos                                                                 |
|-----------|------------|--------|--------------------------------------------------------------------------|
| christian | ********   | admin  | Crear, leer, buscar, editar y eliminar productos                         |
| paul      | paul1234   | user   | Leer y buscar productos                                                  |
| (sin login) | -        | público | Solo puede listar todos los productos (`GET /api/productos`)             |

---

## 🌍 Versión en producción

🔗 [https://proyecto-nodejs-tau.vercel.app](https://proyecto-nodejs-tau.vercel.app)

---

## 📁 Estructura del proyecto

```
src/
├── Controladores/
│    ├── autenticacion.controlador.js
│    └── productos.controlador.js
│
├── Modelos/
│    ├── autenticacion.modelo.js
│    └── prouctos.modelo.js
│
└── Routes/
    ├── autenticacion.ruta.js
    └── products.router.js

```
    
---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express.js
- Firebase Firestore
- JWT
- Vercel (deploy)

---

## ✍️ Autor

**Christian H. Ledesma Fernández**  
📧 christianhledesmafernadez@gmail.com  
📍 Buenos Aires, Argentina
