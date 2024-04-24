import BotonEditarLibroModal from "./BotonEditarLibroModal";
// componente Card para mostrar los campos con su respectiva informacion
const CardLibro = ({
  _id,
  cantidad,
  titulo,
  autor,
  editorial,
  clasificacion,
  apartado,
}) => {
  return (
    // estructura de la card
    <div className="card">
      <div className="card-body">
        {/*
                Titulo y contenido de la card
                */}
        <h5 className="card-title titulo">
          <b>{titulo}</b>
        </h5>
        <p className="card-text">
          Autor: <b>{autor}</b>
        </p>
        <p className="card-text">
          Editorial: <b>{editorial}</b>
        </p>
        <p className="card-text">
          Clasificación: <b>{clasificacion}</b>
        </p>
        <p className="card-text">
          Apartado: <b>{apartado}</b>
        </p>
        <p className="card-text">
          Cantidad: <b>{cantidad}</b>
        </p>
        {/* contenedor para los botones separados */}
        <div className="d-flex justify-content-between">
          <button
            title="Estado del Libro" className={`btn ${cantidad === 0 ? "btn-danger" : "btn-success"}`}
            disabled={cantidad === 0}
          >
            {cantidad === 0 ? "No disponible" : "Disponible"}
          </button>
          <BotonEditarLibroModal
            titulo={titulo}
            autor={autor}
            editorial={editorial}
            clasificacion={clasificacion}
            apartado={apartado}
            cantidad={cantidad}
            idLibro={_id}
          />
        </div>
        <input type="hidden" value={_id} />
      </div>
    </div>
  );
};
export default CardLibro;
