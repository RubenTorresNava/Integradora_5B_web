const CardPrestamo = ({ idPrestamo, idLibro, fechaPrestamo, fechaDevolucion, estado, titulo }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">Fecha de prestamo: {fechaPrestamo}</p>
                <p className="card-text">Fecha de devolucion: {fechaDevolucion}</p>
                <p className="card-text">Estado: {estado}</p>
                <input type="hidden" value={idPrestamo} />
            </div>
        </div>
    );
}

export default CardPrestamo;