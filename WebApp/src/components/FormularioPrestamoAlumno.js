import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { crearPrestamo } from '../api/api';

const FormularioPrestamoAlumno = () => {
    const [datosAlumno, setDatosAlumno] = useState({
        numeroControl: '',
        nombreLibro: ''
    });

    const handleChange = (e) => {
        setDatosAlumno({
            ...datosAlumno,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await crearPrestamo({
                titulo: datosAlumno.nombreLibro,
                noCtrl: datosAlumno.numeroControl
            });
            Swal.fire({
                icon: 'success',
                title: 'Prestamo agregado',
                showConfirmButton: false,
                timer: 1000
            });
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            console.error('Error al crear el préstamo:', error);
            Swal.fire("Hubo un error al crear el préstamo. Por favor, inténtalo de nuevo más tarde.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                    <input required type="text" name="numeroControl" className="form-control mb-3" placeholder="Número de Control" value={datosAlumno.numeroControl} onChange={handleChange} />
                </div>
                <div className="col">
                    <input required type="text" name="nombreLibro" className="form-control mb-3" placeholder="Nombre del Libro" value={datosAlumno.nombreLibro} onChange={handleChange} />
                </div>
            </div>
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success" disabled={!datosAlumno.numeroControl || !datosAlumno.nombreLibro}>Crear Préstamo</button>
            </div>
        </form>
    );
};

export default FormularioPrestamoAlumno;
