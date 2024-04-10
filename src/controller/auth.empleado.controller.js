import { Empleado } from "../model/all.models.js";

export const crear = async (req, res) => {
    try {

        const { noEmpleado, usuario, password } = req.body;

        const empleadoExiste = await Empleado.findOne({ noEmpleado });
        if (empleadoExiste) {
            return res.status(400).json({ message: 'El empleado ya existe' });
        }

        const nuevoEmpleado = new Empleado({ noEmpleado, usuario, password });
        await nuevoEmpleado.save();
        res.status(201).json({ message: 'Empleado creado' });

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el empleado' });
    }
}

export const obtenerEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.status(200).json(empleados);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los empleados' });
    }
}

export const obtenerEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.findById(req.params.id);
        res.status(200).json(empleado);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el empleado' });
    }
}

export const actualizarEmpleado = async (req, res) => {
    try {
        await Empleado.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Empleado actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el empleado' });
    }
}

export const eliminarEmpleado = async (req, res) => {
    try {
        await Empleado.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Empleado eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el empleado' });
    }
}

export const login = async (req, res) => {
    try {
      // Obtener los datos del usuario
      const { usuario, password } = req.body;
  
      // Verificar si el usuario existe
      const existing = await Empleado.findOne({ usuario });
      // Verificar si la contraseña es correcta
        if (existing && existing.password === password) {
            return res.status(200).json({ message: 'Bienvenido' });
        }
        else if(existing && existing.password !== password){
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }
      if(existing){
        return res.status(200).json({ message: 'Bienvenido' });
      }
      else if (!existing) {
        return res.status(400).json({ message: 'El usuario no existe' });
      }
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión' });
        }
    }