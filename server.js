import { Express } from "express";

const app = Express();

app.get("/", (req, res) => {
    res.send("Corriendo patrón");
});

app.listen(3000, () => {
    console.log("La Rest API 7800 Supreme Deluxe está corriendo. Sea usted bienvenido. 7800 Supreme Deluxe, la mejor opción para su vida.");
});