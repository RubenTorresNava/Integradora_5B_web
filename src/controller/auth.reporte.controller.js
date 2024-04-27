import {Libro, Visitas, Alumno, Prestamo } from '../model/all.models.js';
import moment from 'moment';

//reportar cuantas visitas han hecho en el dia de hoy

export const reporteVisitas = async (req, res) => {
    try {
        // Obtener la fecha actual en el formato deseado
        const fechaActual = moment().startOf('day');
        const fechaFin = moment().endOf('day'); // Ajustar por el desfase de una hora
        
        // Realizar la consulta para contar las visitas en el rango de tiempo del día actual
        const totalVisitas = await Visitas.countDocuments({
            // Utilizar $expr para evaluar una expresión que convierte la cadena de texto de fecha a un objeto de fecha
            $expr: {
                $and: [
                    { $gte: [{ $toDate: "$fechaVisita" }, fechaActual.toDate()] }, // Convertir fechaVisita a Date y comparar con fechaActual
                    { $lte: [{ $toDate: "$fechaVisita" }, fechaFin.toDate()] } // Convertir fechaVisita a Date y comparar con fechaFin
                ]
            }
        });

        // Imprimir el número total de visitas en la consola para propósitos de depuración
        console.log("Total de visitas:", totalVisitas);
        // Devolver el número total de visitas en un objeto JSON
        return res.status(200).json({ totalVisitas });
    } catch (error) {
        // Manejar cualquier error que ocurra durante la ejecución del código
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
};


//reportar cuantos prestamos se han hecho en el dia de hoy
export const reportePrestamos = async (req, res) => {
    try {
        // Obtener la fecha actual
        const fechaActual = moment().startOf('day').subtract(1, 'hour').utcOffset('+05:00');
        const fechaFin = moment().endOf('day').subtract(1, 'hour').utcOffset('+05:00'); // Ajustar por el desfase de una hora
        

        // Realizar la consulta para contar los préstamos en el rango de tiempo del día actual
        const totalPrestamos = await Prestamo.countDocuments({
            fechaPrestamo: {
                $gte: fechaActual.toDate(), // Convertir a objeto Date
                $lte: fechaFin.toDate() // Convertir a objeto Date
            }
        });
        console.log(fechaActual.toDate());
        console.log(fechaFin.toDate());
        // Devolver el número total de préstamos en un objeto JSON
        console.log(totalPrestamos);
        return res.status(200).json({ totalPrestamos });
    } catch (error) {
        // Manejar cualquier error que ocurra durante la ejecución del código
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
};




//reportar que libros tiene la cantidad igual o menor a 1 y cuales son
export const reporteLibros = async (req, res) => {
    try {
        const libros = await Libro.find({ cantidad: { $lte: 1 } });
        return res.status(200).json(libros);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//reportar que motivo de visita es el mas comun
export const reporteMotivoVisita = async (req, res) => {
    try {
        const visitas = await Visitas.aggregate([
            {
                $group: {
                    _id: "$motivo",
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { count: -1 }
            }
        ]);
        return res.status(200).json(visitas[0]);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

