const CardLibro = ({ _id, cantidad, titulo, autor, editorial, clasificacion, apartado }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title titulo"><b>{titulo}</b></h5>
                <p className="card-text">Autor: <b>{autor}</b></p>
                <p className="card-text">Editorial: <b>{editorial}</b></p>
                <p className="card-text">Clasificación: <b>{clasificacion}</b></p>
                <p className="card-text">Apartado: <b>{apartado}</b></p>
                <p className="card-text">Cantidad: <b>{cantidad}</b></p>
                <input type="hidden" value={_id} />
            </div>
        </div>
    );
}
export default CardLibro;