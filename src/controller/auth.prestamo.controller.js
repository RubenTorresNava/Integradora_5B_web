import { Alumno, Libro, Prestamo } from "../model/all.models.js";
import { ObjectId } from 'mongodb';

export const crear = async (req, res) => {
    try {
        const { idLibro, noCtrl } = req.body;

        // Buscar el libro por su identificador personalizado
        const libro = await Libro.findOne({ idLibro: idLibro });

        if (!libro) {
            return res.status(404).json({ error: 'No se encontró el libro' });
        }

        // Verificar si el libro está disponible
        if (libro.cantidad === 0) {
            return res.status(400).json({ error: 'No hay libros disponibles' });
        }

        // Verificar si el alumno existe
        const alumno = await Alumno.findOne({ noCtrl});

        if (!alumno) {
            return res.status(404).json({ error: 'No se encontró el alumno' });
        }

        //Verificar si el alumno tiene prestamos pendientes
         if (await Prestamo.findOne({ alumno: alumno._id, estado: 'Prestado' })) {
            return res.status(400).json({ error: 'El alumno tiene un préstamo pendiente' });
        }

        // Crear un nuevo préstamo
        const prestamo = new Prestamo({
            idPrestamo: Math.floor(Math.random() * 100),
            libro: libro._id,
            alumno: alumno._id,
            fechaPrestamo: new Date(),
            fechaEntrega: new Date(),
            estado: 'Prestado'
        });

        // Guardar el préstamo en la base de datos
        await prestamo.save();

        // Decrementar la cantidad de libros disponibles en uno
        await Libro.updateOne(
            { _id: libro._id },
            { $inc: { cantidad: -1 } }
        );

        //imprimir los datos del alumno que solicito el prestamo



        // Préstamo exitoso
        res.status(201).json({ message: 'Libro prestado correctamente' });
    } catch (error) {
        console.error('Error al prestar el libro:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}



export const obtenerPrestamos = async (req, res) => {
    try {
        const prestamos = await Prestamo.find()
            .populate('libro')
            .populate('alumno')
            .exec();

        res.json({ prestamos });
    } catch (error) {
        console.error('Error al obtener todos los préstamos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const contarPrestamos = async (req, res) => {
    try {
        const total = await Prestamo.countDocuments();
        res.json({ total });
    } catch (error) {
        console.error('Error al obtener todos los préstamos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

//devolver libro
export const devolver = async (req, res) => {
    try {
        const { idPrestamo } = req.body;

        // Buscar el préstamo por su ID
        const prestamo = await Prestamo.findOne({ idPrestamo });

        if (!prestamo) {
            return res.status(404).json({ error: 'No se encontró el préstamo' });
        }

        // Verificar si el libro ya ha sido devuelto
        if (prestamo.estado === 'Devuelto') {
            return res.status(400).json({ error: 'El libro ya ha sido devuelto' });
        }

        // Actualizar el estado del préstamo a 'Devuelto'
        const updatedPrestamo = await Prestamo.findOneAndUpdate(
            { idPrestamo },
            { estado: 'Devuelto' },
            { new: true } // Para devolver el documento actualizado
        );

        // Incrementar la cantidad de libros disponibles en uno
        await Libro.updateOne(
            { _id: updatedPrestamo.libro },
            { $inc: { cantidad: 1 } }
        );

        //eliminar el prestamo
        await Prestamo.deleteOne({ idPrestamo });

        // Devolución exitosa
        res.status(200).json({ message: 'Libro devuelto correctamente' });
    } catch (error) {
        console.error('Error al devolver el libro:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}