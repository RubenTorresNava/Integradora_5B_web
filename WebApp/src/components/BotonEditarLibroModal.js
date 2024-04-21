import React from "react";
import { Modal, Button } from "react-bootstrap";
import { actualizarLibro, eliminarLibro } from "../api/api";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const BotonEditarLibroModal = ({
  idLibro,
  titulo,
  autor,
  editorial,
  clasificacion,
  apartado,
  cantidad,
}) => {
  // se inicializan los estados
  const [show, setShow] = React.useState(false);
  const [newTitulo, setNewTitulo] = React.useState(titulo);
  const [newAutor, setNewAutor] = React.useState(autor);
  const [newEditorial, setNewEditorial] = React.useState(editorial);
  const [newClasificacion, setNewClasificacion] = React.useState(clasificacion);
  const [newApartado, setNewApartado] = React.useState(apartado);
  const [newCantidad, setNewCantidad] = React.useState(cantidad);

  // funcion para cerrar el modal
  const handleClose = () => setShow(false);
  // funcion para abrir el modal
  const handleShow = () => setShow(true);
  //actualizar el libro
  const handleEdit = async () => {
    try {
      // se envia la informacion del libro para actualizarlo
      const response = await actualizarLibro({
        idLibro,
        titulo: newTitulo,
        autor: newAutor,
        editorial: newEditorial,
        clasificacion: newClasificacion,
        apartado: newApartado,
        cantidad: newCantidad,
      });
      const data = response.data;
      console.log(data);
      // se muestra un mensaje de exito
      Swal.fire({
        icon: "success",
        title: "Libro actualizado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
      // se cierra el modal
      handleClose();
      // se recarga la pagina
      window.location.reload();
    } catch (error) {
      // se muestra un mensaje de error
      console.error(
        "Error al actualizar el libro. Inténtalo de nuevo más tarde."
      );  
      Swal.fire({
        icon: "error",
        title: "Error al actualizar el libro. Inténtalo de nuevo más tarde.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  //eliminar el libro
  const handleDelete = async () => {
    try {
      // se envia el id del libro para eliminarlo
      const response = await eliminarLibro(idLibro);
      const data = response.data;
      console.log(data);
      // se muestra un mensaje de exito
      Swal.fire({
        icon: "success",
        title: "Libro eliminado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
      // se cierra el modal
      handleClose();
      // se recarga la pagina
      window.location.reload();
    } catch (error) {
      // se muestra un mensaje de error
      console.error(
        "Error al eliminar el libro. Inténtalo de nuevo más tarde."
      );
      Swal.fire({
        icon: "error",
        title: "Error al eliminar el libro. Inténtalo de nuevo más tarde.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  // estructura del boton
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        <FaEdit />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar libro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Información del libro</h5>
          <form>
            <div className="form-group">
              <label>Titulo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Titulo"
                value={newTitulo}
                onChange={(e) => setNewTitulo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Autor</label>
              <input
                type="text"
                className="form-control"
                placeholder="Autor"
                value={newAutor}
                onChange={(e) => setNewAutor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Editorial</label>
              <input
                type="text"
                className="form-control"
                placeholder="Editorial"
                value={newEditorial}
                onChange={(e) => setNewEditorial(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Clasificación</label>
              <input
                type="text"
                className="form-control"
                placeholder="Clasificacion"
                value={newClasificacion}
                onChange={(e) => setNewClasificacion(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Apartado</label>
              <input
                type="text"
                className="form-control"
                placeholder="Apartado"
                value={newApartado}
                onChange={(e) => setNewApartado(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Cantidad</label>
              <input
                type="number"
                className="form-control"
                placeholder="Cantidad"
                value={newCantidad}
                onChange={(e) => setNewCantidad(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            <FaTrashAlt />
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={handleEdit}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BotonEditarLibroModal;
