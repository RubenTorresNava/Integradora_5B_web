import { Visitas } from "../model/all.models.js";

//crear visita
export const crear = async (req, res) => {
    const documento = req.body;
    const fecha = new Date();
    documento.fechaVisita = fecha;
    try {
        await Visitas.create(documento);
        res.status(201).send('Documento guardado correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
    }
};

//obtener todas las visitas
export const obtenerVisitas = async (req, res) => {
    try {
        const visitas = await Visitas.find({});
        res.status(200).send(visitas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
    }
};

//contar los docuementos de la coleccion visitas
export const contarVisitas = async (req, res) => {
  try {
      // Contar todos los documentos de la base de datos
      const count = await Visitas.countDocuments({});
      res.status(200).send({ count });
  } catch (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
  }
};
