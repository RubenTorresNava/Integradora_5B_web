const CardLibro = ({ idLibro, titulo, autor, editorial, cantidad }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">Autor: {autor}</p>
                <p className="card-text">Editorial: {editorial}</p>
                <p className="card-text">Cantidad: {cantidad}</p>
                <input type="hidden" value={idLibro} />
            </div>
        </div>
    );
}

export default CardLibro;