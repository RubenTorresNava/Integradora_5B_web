// crear boton icono amarillo que despliegue el modal
// para poder editar
// usar sweetalert para confirmar la eliminacion
import { FaEdit } from "react-icons/fa";
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { actualizarPrestamo } from "../api/api";
import Swal from "sweetalert2";
// componente boton para editar el prestamo
const BotonEditarPrestamoModal = ({
  idPrestamo,
  fechaPrestamo,
  fechaEntrega,
  estado,
}) => {
  // se inicializan los estados
  const [show, setShow] = React.useState(false);
  const [newFechaPrestamo, setNewFechaPrestamo] = React.useState(fechaPrestamo);
  const [newFechaEntrega, setNewFechaEntrega] = React.useState(fechaEntrega);
  const [newEstado, setNewEstado] = React.useState(estado);
  // funcion para cerrar el modal
  const handleClose = () => setShow(false);
  // funcion para abrir el modal
  const handleShow = () => setShow(true);
  // funcion para editar el prestamo
  const handleEdit = async () => {
    // se crea un objeto con los datos del prestamo
    const prestamo = {
      idPrestamo,
      fechaPrestamo: newFechaPrestamo,
      fechaEntrega: newFechaEntrega,
      estado: newEstado,
    };
    // se llama a la funcion actualizarPrestamo
    const response = await actualizarPrestamo(idPrestamo, prestamo);
    // si la respuesta es correcta
    if (response.status === 200) {
      // se muestra un mensaje de exito
      Swal.fire({
        icon: "success",
        title: "Prestamo actualizado",
        showConfirmButton: false,
        timer: 1500,
      });
      // se cierra el modal
      handleClose();
      // se recarga la pagina
      window.location.reload();
    } else {
      // si la respuesta es incorrecta
      // se muestra un mensaje de error
      Swal.fire({
        icon: "error",
        title: "Error al actualizar el prestamo",
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
          <Modal.Title>Editar prestamo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Fecha de entrega</label>
              <input
                type="date"
                className="form-control"
                value={newFechaEntrega}
                onChange={(e) => setNewFechaEntrega(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={handleEdit}>
            Editar prestamo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
// exportar componente
export default BotonEditarPrestamoModal;
