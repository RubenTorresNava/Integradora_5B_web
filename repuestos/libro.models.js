import mongoose from "mongoose";

const libroSchema = new mongoose.Schema({
    cantidad: {
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
    clasificacion: {
        type: String,
        required: true
    },
    apartado: {
        type: String,
        required: true
    }
});
export default mongoose.model("Libro", libroSchema);