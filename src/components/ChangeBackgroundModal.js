import React from 'react'
import {Modal, Button} from 'react-bootstrap'

function ChangeBackgroundModal(props) {

    const setDefault = {
      '--color__dark': "white",
      '--color__light': 'white',
      '--color__secondary': 'white',
      '--color__text':'black'
    }

    const setOne = {
      '--color__dark': "#ccae62",
      '--color__light': '#ffda79',
      '--color__secondary': '#ffb142',
      '--color__text':'white'
  }

    const cssProperty = document.documentElement.style
    const setColors = (setOne) => {

      for(const variable in setOne){
        cssProperty.setProperty(variable, setOne[variable] )
      }
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Change Colors
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <button onClick={()=>setColors(setOne)}>weird colors</button>
          <button onClick={()=>setColors(setDefault)}>default colors</button>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ChangeBackgroundModal