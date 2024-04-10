import Swal from 'sweetalert2';

const CardPrestamo = ({ idPrestamo, fechaPrestamo, fechaEntrega, estado }) => {
    const handleClick = () => {

        Swal.fire({
            title: '¿Estás seguro de que deseas marcar este préstamo como terminado?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, marcar como terminado',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                // creo que aqui iria la logica para marcar el prestamo como "terminado"
                Swal.fire('Préstamo marcado como terminado con éxito!!');
            }
        });
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title titulo"><b>{idPrestamo}</b></h5>
                <p className="card-text">Fecha de prestamo: <b>{fechaPrestamo}</b></p>
                <p className="card-text">Fecha de devolucion: <b>{fechaEntrega}</b></p>
                <p className="card-text">Estado: <b>{estado}</b></p>
                {/* boton verde */}
                <button className="btn btn-success" onClick={handleClick}>Terminar prestamo</button>
            </div>
        </div>
    );
}

export default CardPrestamo;

