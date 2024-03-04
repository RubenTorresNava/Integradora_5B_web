import { Prestamo } from "../model/all.models.js";

export const crear = async (req, res) => {
    try {

        const { idPrestamo, idLibro, noEmpleado, fechaPrestamo, fechaEntrega, estado } = req.body;

        const prestamoExiste = await Prestamo.findOne({ idPrestamo });
        if (prestamoExiste) {
            return res.status(400).json({ message: 'El prestamo ya existe' });
        }
        
        const nuevoPrestamo = new Prestamo({ idPrestamo, idLibro, noEmpleado, fechaPrestamo, fechaEntrega, estado });
        await nuevoPrestamo.save();
        res.status(201).json({ message: 'Prestamo creado' });

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el prestamo' });
    }
}

export const obtenerPrestamos = async (req, res) => {
    try {
        const prestamos = await Prestamo.find();
        res.status(200).json(prestamos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los prestamos' });
    }
}

export const obtenerPrestamo = async (req, res) => {
    try {
        const prestamo = await Prestamo.findById(req.params.id);
        res.status(200).json(prestamo);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el prestamo' });
    }
}

export const actualizarPrestamo = async (req, res) => {
    try {
        await Prestamo.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Prestamo actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el prestamo' });
    }
}

export const eliminarPrestamo = async (req, res) => {
    try {
        await Prestamo.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Prestamo eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el prestamo' });
    }
}