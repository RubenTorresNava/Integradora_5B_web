import { Int32 } from "mongodb";
import mongoose from "mongoose";

const alumnoSchema = new mongoose.Schema({
    noCtrl: {
        type: Number,
        unique: true,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidoP: {
        type: String,
        required: true
    },
    apellidoM: {
        type: String,
        required: true
    },
    carrera: {
        type: String,
        required: true
    },
    CURP: {
        type: String,
    }
});

 const libroSchema = new mongoose.Schema({
/*     idLibro: { type: Number, required: true },
 */    cantidad: {
        type: Number,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    editorial: {
        type: String,
        required: true
    },
    apartado: {
        type: String,
        required: true
    },
    clasificacion: {
        type: String,
        required: true
    }

});

const visitasSchema = new mongoose.Schema({
    idVisita: { type: Number, required: true },
    idHuella: { type: String, required: true },
    motivo: { type: String, required: true },
    fechaVisita: { type: Date, required: true }
});

const empleadoSchema = new mongoose.Schema({
    noEmpleado: {
        type: Number,
        required: true,
        unique: true
    },
    usuario: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const cadenaSchema = new mongoose.Schema({
    cadena: String
  });

const PrestamoSchema = new mongoose.Schema({
    idPrestamo: { type: Number, required: true },
    libro: { type: mongoose.Schema.Types.ObjectId, ref: 'Libro', required: true },
    alumno: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumno', required: true },
    fechaPrestamo: { type: Date, required: true },
    fechaEntrega: { type: Date, required: true },
    estado: { type: String, required: true }
});

/* const PrestamoHora = new mongoose.Schema({
    idPrestamoHora: { type: Number, required: true },
    idPrestamo: { type: Number, required: true },
    usuario: { type: String, required: true }
});

const PrestamoAlumno = new mongoose.Schema({
    idPrestamoAlumno: { type: Number, required: true },
    noCtrl: { type: Number, required: true },
    idPrestamo: { type: Number, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true }
});

const PrestamoCuatri = new mongoose.Schema({
    idPrestamoCuatri: { type: Number, required: true },
    idPrestamo: { type: Number, required: true },
    usuario: { type: String, required: true },
    tipo_usuario: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true },
}); */

export const Alumno = mongoose.model("Alumno", alumnoSchema);
export const Libro = mongoose.model("Libro", libroSchema);
export const Visitas = mongoose.model("Visitas", visitasSchema);
export const Empleado = mongoose.model("Empleado", empleadoSchema);
export const Cadena = mongoose.model("Cadena", cadenaSchema);
export const Prestamo = mongoose.model("Prestamo", PrestamoSchema);
/* export const PrestamoH = mongoose.model("PrestamoH", PrestamoHora);
export const PrestamoA = mongoose.model("PrestamoA", PrestamoAlumno);
export const PrestamoC = mongoose.model("PrestamoC", PrestamoCuatri); */