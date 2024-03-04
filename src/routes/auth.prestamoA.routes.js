import { Router } from "express";
import * as authPrestamoAController from "../controller/auth.prestamoA.controller.js";

const router = Router();

router.post('/crear', authPrestamoAController.crear);
router.get('/obtenerPrestamosA', authPrestamoAController.obtenerPrestamosAlumno);
router.get('/obtenerPrestamoA/:id', authPrestamoAController.obtenerPrestamoAlumno);
router.put('/actualizarPrestamoA/:id', authPrestamoAController.actualizarPrestamoAlumno);
router.delete('/eliminarPrestamoA/:id', authPrestamoAController.eliminarPrestamoAlumno);

export default router;