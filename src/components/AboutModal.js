import React from 'react'
import {Modal, Button} from 'react-bootstrap'

function AboutModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            El primer tablero de Rello
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Pues parece que esta cosa mejora y avanza, que no? 
          </p>
          <p>Que falta aun?</p>
          <ul>
            <li>Mejorar el CSS</li>
            <li>Poner funcionalidad a BUSCAR TARJETA y CAMBIAR FONDO</li>
            <li>Hay un bug al eliminar la ultima tarjeta de una columna</li>
            <li>Separar un poco los botones de modifycardmodal</li>
            <li>Darle a cada Card una sombra</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default AboutModal