// componente card que mostrara la informacion de los prestamos habidos
import Swal from 'sweetalert2';
import { devolverPrestamo } from '../api/api';
import React from 'react';

const CardPrestamo = ({ idPrestamo, fechaPrestamo, fechaEntrega, estado }) => {
    // funcion para devolver el prestamo
    const handleClick = async () => {
        try {
            // se envia el id del prestamo para devolverlo
            const response = await devolverPrestamo({ idPrestamo });
            const data = response.data;
            console.log(data);
            // se muestra un mensaje de exito
            Swal.fire({
                icon: 'success',
                title: 'Prestamo devuelto',
                showConfirmButton: false,
                timer: 1500
            });
            // se recarga la pagina
            setTimeout(() => {
                window.location.reload();
            }, 1000);

        } catch (error) {
            // se muestra un mensaje de error
            console.error('Error al devolver el prestamo. Inténtalo de nuevo más tarde.');
            Swal.fire({
                icon: 'error',
                title: 'Error al devolver el prestamo. Inténtalo de nuevo más tarde.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    // estructura de la card
    return (
        <div className="card">
            {/*
            Imagen de la card
            */}
            <div className="card-body">
                {/*
                Titulo y contenido de la card con la base de datos
                */}
                <h5 className="card-title titulo"><b>{idPrestamo}</b></h5>
                <p className="card-text">Fecha de prestamo: <b>{fechaPrestamo}</b></p>
                <p className="card-text">Fecha de devolucion: <b>{fechaEntrega}</b></p>
                {estado === 'Devuelto' ? <p className="card-text">Estado: <b>{estado}</b></p> : null}
                <button className={`btn ${estado === 'Devuelto' ? 'btn-secondary' : 'btn-success'}`} onClick={handleClick} disabled={estado === 'Devuelto'}>{estado === 'Devuelto' ? 'Terminado' : 'Terminar préstamo'}</button>
                
            </div>
        </div>
    );
}

export default CardPrestamo;
