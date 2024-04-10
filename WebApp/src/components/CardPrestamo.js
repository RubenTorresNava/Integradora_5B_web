const CardPrestamo = ({ idPrestamo, fechaPrestamo, fechaEntrega, estado }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title titulo">{idPrestamo}</h5>
                <p className="card-text">Fecha de prestamo: {fechaPrestamo}</p>
                <p className="card-text">Fecha de devolucion: {fechaEntrega}</p>
                <p className="card-text">Estado: {estado}</p>
            </div>
        </div>
    );
}

export default CardPrestamo;