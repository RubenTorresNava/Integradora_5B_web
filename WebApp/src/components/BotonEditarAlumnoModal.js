import { FaEdit, FaTrashAlt } from "react-icons/fa";
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { actualizarAlumno, eliminarAlumno } from "../api/api";
import Swal from "sweetalert2";

const BotonEditarAlumnoModal = ({
  idAlumno,
  noCtrl,
  nombre,
  apellidoP,
  apellidoM,
  carrera,
  telefono,
  correo,
}) => {
  // se inicializan los estados
  const [show, setShow] = React.useState(false);
  const [newNoCtrl, setNewNoCtrl] = React.useState(noCtrl);
  const [newNombre, setNewNombre] = React.useState(nombre);
  const [newApellidoP, setNewApellidoP] = React.useState(apellidoP);
  const [newApellidoM, setNewApellidoM] = React.useState(apellidoM);
  const [newCarrera, setNewCarrera] = React.useState(carrera);
  const [newTelefono, setNewTelefono] = React.useState(telefono);
  const [newCorreo, setNewCorreo] = React.useState(correo);

  // funcion para cerrar el modal
  const handleClose = () => setShow(false);
  // funcion para abrir el modal
  const handleShow = () => setShow(true);

  // editar el alumno
  const handleEdit = async () => {
    try {
      // se envia la informacion del alumno a editar
      const response = await actualizarAlumno({
        idAlumno,
        noCtrl: newNoCtrl,
        nombre: newNombre,
        apellidoP: newApellidoP,
        apellidoM: newApellidoM,
        carrera: newCarrera,
        telefono: newTelefono,
        correo: newCorreo,
      });
      const data = response.data;
      console.log(data);
      // se muestra un mensaje de exito con sweetalert
      Swal.fire({
        icon: "success",
        title: "Alumno actualizado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
      // se cierra el modal
      handleClose();
      // se recarga la pagina
      window.location.reload();
    } catch (error) {
      // se muestra un mensaje de error con sweetalert
      console.error("Error al actualizar el alumno. Inténtalo de nuevo más tarde.");
      Swal.fire({
        icon: "error",
        title: "Error al actualizar el alumno. Inténtalo de nuevo más tarde.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  // eliminar el alumno por su noCtrl 
  const handleDelete = async () => {
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro de eliminar el alumno?",
        text: "No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar",
      });
      if(result.isConfirmed){
      // se envia el noCtrl del alumno a eliminar
      const response = await eliminarAlumno(noCtrl);
      const data = response.data;
      console.log(data);
      // se muestra un mensaje de exito con sweetalert
      Swal.fire({
        icon: "success",
        title: "Alumno eliminado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
      // se cierra el modal
      handleClose();
      // se recarga la pagina
      window.location.reload();
    }
    } catch (error) {
      // se muestra un mensaje de error con sweetalert
      console.error("Error al eliminar el alumno. Inténtalo de nuevo más tarde.");
      Swal.fire({
        icon: "error",
        title: "Error al eliminar el alumno. Inténtalo de nuevo más tarde.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  
  // estructura del boton
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        <FaEdit />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Alumno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="noCtrl">No. Control</label>
              <input
                type="text"
                className="form-control"
                id="noCtrl"
                value={newNoCtrl}
                onChange={(e) => setNewNoCtrl(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                value={newNombre}
                onChange={(e) => setNewNombre(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellidoP">Apellido Paterno</label>
              <input
                type="text"
                className="form-control"
                id="apellidoP"
                value={newApellidoP}
                onChange={(e) => setNewApellidoP(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellidoM">Apellido Materno</label>
              <input
                type="text"
                className="form-control"
                id="apellidoM"
                value={newApellidoM}
                onChange={(e) => setNewApellidoM(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="carrera">Carrera</label>
              <input
                type="text"
                className="form-control"
                id="carrera"
                value={newCarrera}
                onChange={(e) => setNewCarrera(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Telefono</label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                value={newTelefono}
                onChange={(e) => setNewTelefono(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo</label>
              <input
                type="text"
                className="form-control"
                id="correo"
                value={newCorreo}
                onChange={(e) => setNewCorreo(e.target.value)}
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
          <Button variant="primary" onClick={handleEdit}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BotonEditarAlumnoModal;
