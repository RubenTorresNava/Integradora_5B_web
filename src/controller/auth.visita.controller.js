import { Visitas } from "../model/all.models.js";

//crear visita
export const crear = async (req, res) => {
    const documento = req.body;

    try {
        await Visitas.create(documento);
        res.status(201).send('Documento guardado correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
    }
};

//obtener visitas
export const obtenerVisitas = async (req, res) => {
    // Obtener todos los documentos de la base de datos
    Visitas.find({}, (err, visitas) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.status(200).send(visitas);
      }
    });
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
