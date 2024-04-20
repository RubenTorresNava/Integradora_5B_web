import { Router } from "express";
import * as authAlumnoController from "../controller/auth.alumno.controller.js";

const router = Router();

router.post('/crear', authAlumnoController.crear);
router.get('/obtenerAlumnos', authAlumnoController.obtenerAlumnos);
router.get('/contarAlumnos', authAlumnoController.contarAlumnos);
router.put('/actualizarAlumno', authAlumnoController.actualizarAlumno);
router.delete('/eliminarAlumno', authAlumnoController.eliminarAlumno);
export default router;