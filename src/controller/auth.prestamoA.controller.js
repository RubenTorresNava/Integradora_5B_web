import { PrestamoA, Prestamo, Alumno } from "../model/all.models.js";

export const crear = async (req, res) => {
    try {

        const { idPrestamoAlumno, noCtrl, idPrestamo, email, telefono } = req.body;

        const prestamoAlumnoExiste = await PrestamoA.findOne({ idPrestamoAlumno });
        if (prestamoAlumnoExiste) {
            return res.status(400).json({ message: 'El prestamo del alumno ya existe' });
        }

        const alumnoExiste = await Alumno.findOne({ noCtrl });
        if (!alumnoExiste) {
            return res.status(400).json({ message: 'El alumno no existe' });
        }

        const prestamoExiste = await Prestamo.findOne({ idPrestamo });
        if (!prestamoExiste) {
            return res.status(400).json({ message: 'El prestamo no existe' });
        }

        const nuevoPrestamoAlumno = new PrestamoA({ idPrestamoAlumno, noCtrl, idPrestamo, email, telefono });
        await nuevoPrestamoAlumno.save();
        res.status(201).json({ message: 'Prestamo del alumno creado' });

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el prestamo del alumno' });
    }
}

export const obtenerPrestamosAlumno = async (req, res) => {
    try {
        const prestamosAlumno = await PrestamoA.find();
        res.status(200).json(prestamosAlumno);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los prestamos del alumno' });
    }
}

export const obtenerPrestamoAlumno = async (req, res) => {
    try {
        const prestamoAlumno = await PrestamoA.findById(req.params.id);
        res.status(200).json(prestamoAlumno);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el prestamo del alumno' });
    }
}

export const actualizarPrestamoAlumno = async (req, res) => {
    try {
        await PrestamoA.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Prestamo del alumno actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el prestamo del alumno' });
    }
}

export const eliminarPrestamoAlumno = async (req, res) => {
    try {
        await PrestamoA.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Prestamo del alumno eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el prestamo del alumno' });
    }
}