import { Router } from "express";
import * as authPrestamoCController from "../controller/auth.prestamoC.controller.js";

const router = Router();

router.post('/crear', authPrestamoCController.crear);
router.get('/obtenerPrestamosC', authPrestamoCController.obtenerPrestamosCuatri);
router.get('/obtenerPrestamoC/:id', authPrestamoCController.obtenerPrestamoCuatri);
router.put('/actualizarPrestamoC/:id', authPrestamoCController.actualizarPrestamoCuatri);
router.delete('/eliminarPrestamoC/:id', authPrestamoCController.eliminarPrestamoCuatri);

export default router;
