import { Visitas } from "../model/all.models.js";

export const crear = async (req, res) => {
    try {

        const { idVisita, idHuella, motivo, fechaVisita } = req.body;

        const visitaExiste = await Visitas.findOne({ idVisita });
        if (visitaExiste) {
            return res.status(400).json({ message: 'La visita ya existe' });
        }

        const nuevaVisita = new Visitas({ idVisita, idHuella, motivo, fechaVisita });
        await nuevaVisita.save();
        res.status(201).json({ message: 'Visita creada' });

    } catch (error) {
        res.status(500).json({ message: 'Error al crear la visita' });
    }
}

export const obtenerVisitas = async (req, res) => {
    try {
        const visitas = await Visitas.find();
        res.status(200).json(visitas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las visitas' });
    }
}

export const obtenerVisita = async (req, res) => {
    try {
        const visita = await Visitas.findById(req.params.id);
        res.status(200).json(visita);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la visita' });
    }
}

export const actualizarVisita = async (req, res) => {
    try {
        await Visitas.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Visita actualizada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la visita' });
    }
}

export const eliminarVisita = async (req, res) => {
    try {
        await Visitas.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Visita eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la visita' });
    }
}