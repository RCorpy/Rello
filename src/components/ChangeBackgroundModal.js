import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import {GithubPicker} from 'react-color'



function ChangeBackgroundModal(props) {

    const [colorDark, setColorDark] = useState("white")
    const [colorLight, setColorLight] = useState("white")
    const [colorText, setColorText] = useState("black")

    const COLOR_ARRAY = ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', 
    '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', 'white', 'black']

    const setDefault = {
      '--color__dark': "white",
      '--color__light': 'white',
      '--color__secondary': 'white',
      '--color__text':'black'
    }

    /* could create sets, with buttons to change all colors at the same time
    
    const setOne = {
      '--color__dark': "#ccae62",
      '--color__light': '#ffda79',
      '--color__secondary': '#ffb142',
      '--color__text':'white'
  }*/

    const cssProperty = document.documentElement.style
    const setColors = (setOne) => {

      for(const variable in setOne){
        cssProperty.setProperty(variable, setOne[variable] )
      }
    }

    const handleChangeDark = (color, event) => {
      setColorDark(color.hex)
      cssProperty.setProperty('--color__dark', color.hex )
    }

    const handleChangeLight = (color, event) => {
      setColorLight(color.hex)
      cssProperty.setProperty('--color__light', color.hex )
    }

    const handleChangeText = (color, event) => {
      setColorText(color.hex)
      cssProperty.setProperty('--color__text', color.hex )
    }


    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Change Colors
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
          Cards
          <GithubPicker colors={COLOR_ARRAY} width={"212px"} triangle="hide" onChange={handleChangeDark}/>
          Background
          <GithubPicker colors={COLOR_ARRAY} width={"212px"} triangle="hide" onChange={handleChangeLight}/>
          Text
          <GithubPicker colors={COLOR_ARRAY} width={"212px"} triangle="hide" onChange={handleChangeText}/>
          <button onClick={()=>setColors(setDefault)}>default colors</button>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ChangeBackgroundModal