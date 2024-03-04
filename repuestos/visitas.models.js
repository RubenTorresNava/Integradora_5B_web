import mongoose from "mongoose";

const visitasSchema = new mongoose.Schema({
    idVisita: { type: Number, required: true },
    idHuella: { type: String, required: true },
    motivo: { type: String, required: true },
    fechaVisita: { type: Date, required: true }
});

export default mongoose.model("Visitas", visitasSchema);
