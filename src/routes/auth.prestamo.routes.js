import { Router } from "express";
import * as authPrestamoController from "../controller/auth.prestamo.controller.js";

const router = Router();

router.post('/crear', authPrestamoController.crear);
router.get('/obtenerPrestamos', authPrestamoController.obtenerPrestamos);
router.get('/obtenerPrestamo/:id', authPrestamoController.obtenerPrestamo);
router.put('/actualizarPrestamo/:id', authPrestamoController.actualizarPrestamo);
router.delete('/eliminarPrestamo/:id', authPrestamoController.eliminarPrestamo);

export default router;