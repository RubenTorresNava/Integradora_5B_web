import { Alumno } from '../model/all.models.js';

export const crear = async (req, res) => {
    try {
        const { noCtrl, nombre, apellidoP, apellidoM, carrera, telefono, correo } = req.body;

        // Validar si el alumno ya existe
        const alumnoExiste = await Alumno.findOne({ noCtrl });
        if (alumnoExiste) {
            return res.status(400).json({ error: 'El alumno ya existe' });
        }

        // Crear un nuevo alumno
        const nuevoAlumno = new Alumno({ noCtrl, nombre, apellidoP, apellidoM, carrera, telefono, correo});
        await nuevoAlumno.save();
        
        // Respuesta exitosa
        res.status(201).json({ message: 'Alumno creado exitosamente' });
    } catch (error) {
        console.error('Error al crear el alumno:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const obtenerAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los alumnos' });
    }
}

export const obtenerAlumno = async (req, res) => {
    try {
        const {noCtrl} = req.params;
        const alumno = await Alumno.findOne({ noCtrl });
        res.status(200).json(alumno);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el alumno' });
    }
}

//eliminar un alumno por su noCtrl
export const eliminarAlumno = async (req, res) => {
    const { noCtrl } = req.body;
    const result = await Alumno.findOneAndDelete(noCtrl);
    if (result) {
        res.status(200).json({ message: 'Alumno eliminado' });
    } else {
        res.status(404).json({ message: 'Alumno no encontrado' });
    }
    
}


export const contarAlumnos = async (req, res) => {
    try {
        const total = await Alumno.countDocuments();
        res.status(200).json({ total });
    } catch (error) {
        res.status(500).json({ message: 'Error al contar los alumnos' });
    }
}

//editar alumno
export const actualizarAlumno = async (req, res) => {
    try {
        const { noCtrl, nombre, apellidoP, apellidoM, carrera, telefono, correo } = req.body;
        const alumno = await Alumno.findOne();
        if (alumno) {
            alumno.noCtrl = noCtrl;
            alumno.nombre = nombre;
            alumno.apellidoP = apellidoP;
            alumno.apellidoM = apellidoM;
            alumno.carrera = carrera;
            alumno.telefono = telefono;
            alumno.correo = correo;
            await alumno.save();
            res.status(200).json({ message: 'Alumno actualizado' });
        } else {
            res.status(404).json({ message: 'Alumno no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el alumno' });
    }
}