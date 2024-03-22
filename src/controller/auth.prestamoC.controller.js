import { PrestamoC, Prestamo } from "../model/all.models.js";

export const crear = async (req, res) => {
    try {

        const { idPrestamoCuatri, idPrestamo, usuario, tipo_usuario, telefono, email } = req.body;

        const prestamoCuatriExiste = await PrestamoC.findOne({ idPrestamoCuatri });
        if (prestamoCuatriExiste) {
            return res.status(400).json({ message: 'El prestamo cuatrimestral ya existe' });
        }

        const nuevoPrestamoCuatri = new PrestamoC({ idPrestamoCuatri, idPrestamo, usuario, tipo_usuario, telefono, email });
        await nuevoPrestamoCuatri.save();
        res.status(201).json({ message: 'Prestamo cuatrimestral creado' });

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el prestamo cuatrimestral' });
    }
}

export const obtenerPrestamosCuatri = async (req, res) => {
    try {
        const prestamosCuatri = await PrestamoC.find();
        res.status(200).json(prestamosCuatri);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los prestamos cuatrimestrales' });
    }
}

export const obtenerPrestamoCuatri = async (req, res) => {
    try {
        const prestamoCuatri = await PrestamoC.findById(req.params.id);
        res.status(200).json(prestamoCuatri);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el prestamo cuatrimestral' });
    }
}

export const actualizarPrestamoCuatri = async (req, res) => {
    try {
        await PrestamoC.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Prestamo cuatrimestral actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el prestamo cuatrimestral' });
    }
}

export const eliminarPrestamoCuatri = async (req, res) => {
    try {
        await PrestamoC.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Prestamo cuatrimestral eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el prestamo cuatrimestral' });
    }
}