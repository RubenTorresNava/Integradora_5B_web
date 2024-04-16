import { Visitas } from "../model/all.models.js";

//crear visita
export const crear = async (req, res) => {
    const nuevoDocumento = new Visitas(req.body);

    // Guardar el documento en la base de datos
    nuevoDocumento.save()
    .then(doc => {
        console.log(doc);
    })
    .catch(err => {
        console.error(err);
    });
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
