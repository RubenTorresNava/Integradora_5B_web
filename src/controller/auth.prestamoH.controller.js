import { PrestamoH } from "../model/all.models.js";

export const crear = async (req, res) => {
    try {

        const { idPrestamoHora, idPrestamo, usuario } = req.body;

        const prestamoHoraExiste = await PrestamoH.findOne({ idPrestamoHora });
        if (prestamoHoraExiste) {
            return res.status(400).json({ message: 'El prestamo por hora ya existe' });
        }

        const nuevoPrestamoHora = new PrestamoH({ idPrestamoHora, idPrestamo, usuario });
        await nuevoPrestamoHora.save();
        res.status(201).json({ message: 'Prestamo por hora creado' });

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el prestamo por hora' });
    }
}

export const obtenerPrestamosHora = async (req, res) => {
    try {
        const prestamosHora = await PrestamoH.find();
        res.status(200).json(prestamosHora);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los prestamos por hora' });
    }
}

export const obtenerPrestamoHora = async (req, res) => {
    try {
        const prestamoHora = await PrestamoH.findById(req.params.id);
        res.status(200).json(prestamoHora);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el prestamo por hora' });
    }
}

export const actualizarPrestamoHora = async (req, res) => {
    try {
        await PrestamoH.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Prestamo por hora actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el prestamo por hora' });
    }
}

export const eliminarPrestamoHora = async (req, res) => {
    try {
        await PrestamoH.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Prestamo por hora eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el prestamo por hora' });
    }
}