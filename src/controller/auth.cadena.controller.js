import { Cadena } from '../model/all.models.js';

export const procesarCadena = async (req, res) => {
    try {
        const { cadena } = req.body;
        // Guardar la cadena en la base de datos
        const nuevaCadena = new Cadena({ cadena });
        await nuevaCadena.save();
        res.json({ mensaje: 'Cadena recibida y guardada correctamente.' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al procesar la solicitud.' });
      }
}