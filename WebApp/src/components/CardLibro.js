const CardLibro = ({ _id, cantidad, titulo, autor, editorial, clasificacion, apartado }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title titulo">{titulo}</h5>
                <p className="card-text">Autor: {autor}</p>
                <p className="card-text">Editorial: {editorial}</p>
                <p className="card-text">Clasificación: {clasificacion}</p>
                <p className="card-text">Apartado: {apartado}</p>
                <p className="card-text">Cantidad: {cantidad}</p>
                <input type="hidden" value={_id} />
            </div>
        </div>
    );
}
export default CardLibro;