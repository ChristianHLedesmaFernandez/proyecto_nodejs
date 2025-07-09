import jwt from 'jsonwebtoken'; 
import 'dotenv/config'; 

const secret_key = process.env.JWT_SECRET_KEY; 

// Middleware para verificar el token JWT 
export const autenticacion = (req, res, next) => {
    const tokenJWT = req.headers['authorization'];
    if (!tokenJWT || !tokenJWT.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Debe Loguearse" });
    }
    const token = tokenJWT.split(" ")[1];
    jwt.verify(token, secret_key, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: "Token inválido o expirado" });
        }
        req.usuario = decoded; // Aquí decoded incluye el rol si lo pusiste al firmar el token
        next();
    });
};

// Verifica Rol de usuario
export const verificarRol = (...rolesPermitidos) => {
  return (req, res, next) => {
    const rol = req.usuario?.rol;
    if (!rol) {
      return res.status(403).json({ error: "Rol no presente en el token" });
    }
    if (!rolesPermitidos.includes(rol)) {
      return res.status(403).json({ 
        error: `Acceso denegado. Se requiere uno de los siguientes roles: ${rolesPermitidos.join(", ")}` 
      });
    }
    next(); // Tiene un rol permitido
  };
};