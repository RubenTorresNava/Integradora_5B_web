import {Router} from 'express';
import * as autReporteController from '../controller/auth.reporte.controller.js';

const router = Router();

router.get('/reporteVisitas', autReporteController.reporteVisitas);
router.get('/reportePrestamos', autReporteController.reportePrestamos);
router.get('/reporteLibros', autReporteController.reporteLibros);
router.get('/reporteMotivoVisita', autReporteController.reporteMotivoVisita);

export default router;