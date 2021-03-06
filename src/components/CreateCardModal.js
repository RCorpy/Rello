import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import {connect} from 'react-redux'

function CreateCardModal(props) {

    const [cardName, setCardName] = useState("")
    const [cardBody, setCardBody] = useState("")

    const handleChange = (event) => {
      setCardName(event.target.value)
    }

    const handleTextAreaChange = (event) => {
        setCardBody(event.target.value)
    }

    const handleCreateCard = () => {
      props.createCard(cardName, props.columnIndex, cardBody); 
      props.onHide()
      setCardName("")
      setCardBody("")
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
            Create new Card
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>New Card: {cardName}</Form.Label>
            <Form.Control placeholder="Enter new card name" onChange={handleChange} value={cardName}/>
            <Form.Text className="text-muted">
              You probably wont be able to change it later!
            </Form.Text>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" onChange={handleTextAreaChange} value={cardBody}/>
          </Form.Group>
          <Button variant="success" onClick={()=>{handleCreateCard()}}>Create Card</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const connectedCreateCardModal = connect(state => ({state:state}), (dispatch)=>({
    createCard: (cardName, columnIndex, cardBody) => dispatch({
        type: 'CREATE_CARD',
        cardName: cardName,
        columnIndex: columnIndex,
        cardBody: cardBody
    })
  }))(CreateCardModal)
  export default connectedCreateCardModal;