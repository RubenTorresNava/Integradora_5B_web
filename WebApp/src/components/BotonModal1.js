import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormularioPrestamoAlumno from './FormularioPrestamoAlumno';
import { FaPlus } from 'react-icons/fa';

const BotonModal1 = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="primary" onClick={handleShow} style={styles.boton}>
                <FaPlus />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Realizar Préstamo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormularioPrestamoAlumno />
                </Modal.Body>
            </Modal>
        </>
    );
}

const styles = {
    boton: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        fontSize: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: 'green',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        border: '2px solid green',
    }
}

export default BotonModal1;