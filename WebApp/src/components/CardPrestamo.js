import Swal from 'sweetalert2';
import { devolverPrestamo } from '../api/api';
import React from 'react';

const CardPrestamo = ({ idPrestamo, fechaPrestamo, fechaEntrega, estado }) => {
    const handleClick = async () => {
        try {
            const response = await devolverPrestamo({ idPrestamo });
            const data = response.data;
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Prestamo devuelto',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error al devolver el prestamo. Inténtalo de nuevo más tarde.');
            Swal.fire({
                icon: 'error',
                title: 'Error al devolver el prestamo. Inténtalo de nuevo más tarde.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title titulo"><b>{idPrestamo}</b></h5>
                <p className="card-text">Fecha de prestamo: <b>{fechaPrestamo}</b></p>
                <p className="card-text">Fecha de devolucion: <b>{fechaEntrega}</b></p>
                <p className="card-text">Estado: <b>{estado}</b></p>
                {/* boton verde */}
                <button className="btn btn-success" onClick={handleClick}>Terminar préstamo</button>
            </div>
        </div>
    );
}

export default CardPrestamo;
