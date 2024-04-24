import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FormularioPrestamoAlumno from "./FormularioPrestamoAlumno";
import { FaPlus } from "react-icons/fa";

const BotonModal1 = () => {
  // estados para abrir y cerrar el modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* 
        Boton para abrir el modal
        */}
      <Button variant="primary" title="Hacer Nuevo Prestamo" onClick={handleShow} style={styles.boton}>
        <FaPlus />
      </Button>
      {/* 
            Modal para realizar un préstamo
            */}
      <Modal show={show} onHide={handleClose}>
        {/* 
                Cabecera del modal
                */}
        <Modal.Header closeButton>
          <Modal.Title>Realizar Préstamo</Modal.Title>
        </Modal.Header>
        {/* 
                Cuerpo del modal
                */}
        <Modal.Body>
          <FormularioPrestamoAlumno />
        </Modal.Body>
      </Modal>
    </>
  );
};

const styles = {
  // estilos para el boton modal
  boton: {
    position: "fixed",
    top: "10%",
    right: "20px",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "green",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    border: "2px solid green",
  },
};

export default BotonModal1;
