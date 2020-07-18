import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import {connect} from 'react-redux'

function CreateColumnModal(props) {

    const [columnName, setColumnName] = useState("")

    const handleChange = (event) => {
      setColumnName(event.target.value)
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
            Create new column
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>New column: {columnName}</Form.Label>
            <Form.Control placeholder="Enter new column name" onChange={handleChange}/>
            <Form.Text className="text-muted">
              You probably wont be able to change it later!
            </Form.Text>
          </Form.Group>
          <Button variant="success" onClick={()=>{props.createcolumn(columnName); props.onHide()}}>Create Column</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const connectedCreateColumnModal = connect(state => ({state:state}), (dispatch)=>({
    createcolumn: (columnName) => dispatch({
        type: 'CREATE_COLUMN',
        columnName: columnName
    })
  }))(CreateColumnModal)
  export default connectedCreateColumnModal;