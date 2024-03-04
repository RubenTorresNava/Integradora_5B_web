import { Router } from "express";
import * as authVisitaController from "../controller/auth.visita.controller.js";

const router = Router();

router.post('/crear', authVisitaController.crear);
router.get('/obtenerVisitas', authVisitaController.obtenerVisitas);
router.get('/obtenerVisita/:id', authVisitaController.obtenerVisita);
router.put('/actualizarVisita/:id', authVisitaController.actualizarVisita);
router.delete('/eliminarVisita/:id', authVisitaController.eliminarVisita);

export default router;