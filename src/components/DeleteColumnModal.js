import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import {connect} from 'react-redux'

function DeleteColumnModal(props) {

    const [columnName, setColumnName] = useState("-")

    const handleChange = (event) => {
        setColumnName(event.target.value)
        console.log(event)
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
            Delete a Column
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Selected: {columnName}
            <Form.Group>
                <Form.Control as="select" size="lg" onChange={handleChange}>
                    <option>-</option>
                    {props.state.map(element => <option>{element.title}</option>)}
                </Form.Control>
            </Form.Group>
            <Button variant="danger" onClick={()=>{props.deletecolumn(columnName); props.onHide()}}>Delete Column</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  

  const connectedDeleteColumnModal = connect(state => ({state:state}), (dispatch)=>({
    deletecolumn: (columnName) => dispatch({
        type: 'DELETE_COLUMN',
        columnName: columnName
    })
  }))(DeleteColumnModal)
  export default connectedDeleteColumnModal;