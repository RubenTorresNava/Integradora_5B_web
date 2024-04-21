import { Empleado } from "../model/all.models.js";
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    try {
        const { usuario, password } = req.body;

        const existing = await Empleado.findOne({ usuario });

        if (existing && existing.password === password) {
            // Generar un token JWT
            const token = jwt.sign({ usuario: existing.usuario }, 'secret_key', { expiresIn: '1h' });
            return res.status(200).json({ message: 'Bienvenido', token });
        } else if (existing && existing.password !== password) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        } else if (!existing) {
            return res.status(400).json({ message: 'El usuario no existe' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
}

//resetear contraseña de empleado
export const actualizarPassword = async (req, res) => {
    try {
        const { usuario, password } = req.body;

        const existing = await Empleado.findOne({ usuario });
        if (existing) {
            // Verificar si la contraseña nueva es igual a la anterior
            if (existing.password === password) {
                return res.status(400).json({ message: 'La contraseña es igual a la anterior' });
            }

            existing.password = password;
            await existing.save();
            return res.status(200).json({ message: 'Contraseña actualizada' });
        }

        return res.status(400).json({ message: 'El usuario no existe' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar contraseña' });
    }
}

//obtener los empleados
export const obtenerEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        return res.status(200).json(empleados);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener empleados' });
    }
}