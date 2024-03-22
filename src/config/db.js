import mongoose from "mongoose";
const urlMongo = "mongodb://localhost:27017/integradora"

export const conectarDB = async () => {
    try {
        console.log("7800 Supreme Deluxe está intentando conectar con la base de datos. Espere un momento...");
        await mongoose.connect(urlMongo, {
        });
        console.log("La base de datos fue alcanzada. Excelente... 7800 Supreme Deluxe, la mejor opción para su vida.");
    } catch (error) {
        console.log("7800 Supreme Deluxe no pudo alcanzar la base de datos. NO volverá a suceder. " + error);
    }
}