import { Router } from "express";
import * as authEmpleadoController from "../controller/auth.empleado.controller.js";

const router = Router();

router.post('/login', authEmpleadoController.login);
router.put('/actualizarPassword', authEmpleadoController.actualizarPassword);
router.get('/obtenerEmpleados', authEmpleadoController.obtenerEmpleados);
export default router;