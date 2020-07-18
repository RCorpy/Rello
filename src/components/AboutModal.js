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
            <li>Implementar Drag and Drops</li>
            <li>Reconfigurar la funcion de borrar las tarjetas haciendo las tarjetas modals?</li>
            <li>Poner funcionalidad a los modals del sidebar</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default AboutModal