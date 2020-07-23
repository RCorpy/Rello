import React, {useState, useEffect} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import {connect} from 'react-redux'
import ChipSelector from './ChipSelector'
import './ModifyCardModal.css'

function ModifyCardModal(props) {

    const [cardName, setCardName] = useState("")
    const [cardBody, setCardBody] = useState("")
    const [cardChip, setCardChip] = useState("")

    const handleChange = (event) => {
      setCardName(event.target.value)
    }

    const handleTextAreaChange = (event) => {
        setCardBody(event.target.value)
    }

    const handleChipChange = (chipName) => {
      setCardChip(chipName)
      props.changecardchip(props.columnindex, props.cardindex, chipName)
    }

    useEffect(()=>{
      let thisColumn = props.state[props.columnindex]
      
      if(thisColumn.cards.length>props.cardindex){
        setCardName(thisColumn.cards[props.cardindex].header)
        setCardBody(thisColumn.cards[props.cardindex].body)
        setCardChip(thisColumn.cards[props.cardindex].chip)
      }
    },[props.cardindex, props.columnindex, props.state])

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
          <div className="buttonBox">
            <div>
            <Button variant="warning" onClick={()=>{props.modifycard(props.columnindex, props.cardindex, cardName, cardBody ); props.onHide()}}>Modify Card</Button>
            <ChipSelector active={cardChip} handleChipChange={handleChipChange}/>
            </div>
            <Button variant="danger" onClick={()=>{props.deletecard(props.columnindex, props.cardindex); props.onHide()}}>Delete Card</Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const connectedModifyCardModal = connect(state => ({state:state}), (dispatch)=>({
    deletecard: (columnIndex, cardIndex) => dispatch({
        type: 'DELETE_CARD',
        columnIndex:columnIndex,
        cardIndex:cardIndex
    }),
    modifycard: (columnIndex, cardIndex, cardName, cardBody) => dispatch({
        type: 'MODIFY_CARD',
        columnIndex:columnIndex,
        cardIndex:cardIndex,
        cardName: cardName,
        cardBody: cardBody
    }),
    changecardchip: (columnIndex, cardIndex, cardChip) => dispatch({
      type: 'CHANGE_CARD_CHIP',
      columnIndex:columnIndex,
      cardIndex:cardIndex,
      cardChip: cardChip
  })
  }))(ModifyCardModal)
  export default connectedModifyCardModal;