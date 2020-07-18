import React, {useState, useEffect} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import {connect} from 'react-redux'

function ModifyCardModal(props) {

    const [cardName, setCardName] = useState(props.state[props.columnIndex].cards[props.cardIndex].header)
    const [cardBody, setCardBody] = useState(props.state[props.columnIndex].cards[props.cardIndex].body)

    const handleChange = (event) => {
      setCardName(event.target.value)
    }

    const handleTextAreaChange = (event) => {
        setCardBody(event.target.value)
    }

    useEffect(()=>{
        setCardName(props.state[props.columnIndex].cards[props.cardIndex].header)
        setCardBody(props.state[props.columnIndex].cards[props.cardIndex].body)
    },[props.cardIndex])

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modify a Card
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Modify Card: {cardName}</Form.Label>
            <Form.Control placeholder="Enter new card name" onChange={handleChange} value={cardName}/>
            <Form.Text className="text-muted">
              You probably wont be able to change it later!
            </Form.Text>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" onChange={handleTextAreaChange} value={cardBody}/>
          </Form.Group>
          <Button variant="warning" onClick={()=>{props.modifyCard(props.columnIndex, props.cardIndex, cardName, cardBody ); props.onHide()}}>Modify Card</Button>
          <Button variant="danger" onClick={()=>{props.deleteCard(props.columnIndex, props.cardIndex); props.onHide()}}>Delete Card</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const connectedModifyCardModal = connect(state => ({state:state}), (dispatch)=>({
    deleteCard: (columnIndex, cardIndex) => dispatch({
        type: 'DELETE_CARD',
        columnIndex:columnIndex,
        cardIndex:cardIndex
    }),
    modifyCard: (columnIndex, cardIndex, cardName, cardBody) => dispatch({
        type: 'MODIFY_CARD',
        columnIndex:columnIndex,
        cardIndex:cardIndex,
        cardName: cardName,
        cardBody: cardBody
    })
  }))(ModifyCardModal)
  export default connectedModifyCardModal;