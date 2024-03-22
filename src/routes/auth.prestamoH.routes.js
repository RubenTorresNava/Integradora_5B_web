import { Router } from "express";
import * as authPrestamoHController from "../controller/auth.prestamoH.controller.js";

const router = Router();

router.post('/crear', authPrestamoHController.crear);
router.get('/obtenerPrestamosH', authPrestamoHController.obtenerPrestamosHora);
router.get('/obtenerPrestamoH/:id', authPrestamoHController.obtenerPrestamoHora);
router.put('/actualizarPrestamoH/:id', authPrestamoHController.actualizarPrestamoHora);
router.delete('/eliminarPrestamoH/:id', authPrestamoHController.eliminarPrestamoHora);

export default router;