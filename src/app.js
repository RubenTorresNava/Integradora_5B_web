import corse from 'cors';
import express from 'express';
import morgan from 'morgan';
import alumnoRoutes from './routes/auth.alumno.routes.js';
import empleadoRoutes from './routes/auth.empleado.routes.js';
import libroRoutes from './routes/auth.libro.routes.js';
import visitaRoutes from './routes/auth.visita.routes.js';
import prestamoRoutes from './routes/auth.prestamo.routes.js';
import reporteRoutes from './routes/aut.reporte.routes.js';

const app = express();
app.use(corse());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenidos a La Rest API 7800 Supreme Deluxe, la mejor opción para su vida.');
});


app.use('/api/alumno', alumnoRoutes);
app.use('/api/empleado', empleadoRoutes);
app.use('/api/libro', libroRoutes);
app.use('/api/visita', visitaRoutes);
app.use('/api/prestamo', prestamoRoutes);
app.use('/api/reporte', reporteRoutes);


export default app;