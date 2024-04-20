// boton que sera hecho con estilos, abrira una modal con un formulario para agregar un libro
// con los siguientes datos: clasificacion, cantidad, titulo, autor, editorial, apartado, idLibro(solo perimitir 14 caracteres)
// el boton tendria un icono de agregar
// el boton tendra un color verde, sera redoondo y estara fijado al top de la pantalla

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import FormularioLibroAgregar from "./FormularioLibroAgregar";

const BotonAgregarLibroModal = () => {
  // estados para abrir y cerrar el modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    // Boton para abrir el modal
    <>
      {/* 
            Boton para abrir el modal
            */}
      <Button variant="primary" onClick={handleShow} style={styles.boton}>
        <FaPlus />
      </Button>
      {/*
                Modal para agregar un libro
                */}
      <Modal show={show} onHide={handleClose}>
        {/* 
                    
                    */}
        <Modal.Header closeButton>
          <Modal.Title>Agregar Libro</Modal.Title>
        </Modal.Header>
        {/* 
                    Cuerpo del modal
                    */}
        <Modal.Body>
          <FormularioLibroAgregar />
        </Modal.Body>
      </Modal>
    </>
  );
};
// estilos para el boton modal
const styles = {
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

export default BotonAgregarLibroModal;
