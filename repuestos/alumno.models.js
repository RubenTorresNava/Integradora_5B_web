import mongoose from "mongoose";

const alumnoSchema = new mongoose.Schema({
    noCtrl: {
        type: String,
        required: true,
        unique: true
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
        required: true
    }
});

export default mongoose.model("Alumno", alumnoSchema);
