import React from 'react'
import {DropdownButton, Dropdown, ButtonGroup} from 'react-bootstrap'

function ChipSelector(props){
    const isActive = (string) => {
        return string === props.active
    }

    const noneStyle = {backgroundColor: 'white', color: 'black'}

    const concernStyle={backgroundColor: 'lightgreen'}
        
    const choreStyle= {backgroundColor: 'red'}

    const taskStyle= {backgroundColor: 'green'}

    const spikeStyle= {backgroundColor: 'orange'}

    const technicalStyle= {backgroundColor: 'lightblue'}


    return(
        <DropdownButton
            as={ButtonGroup}
            id={`dropdown-variants-Chips`}
            variant={"info"}
            title={"Chips"}
        > 
            <Dropdown.Item eventKey="1" style={noneStyle} active={isActive("None")} onClick={()=>props.handleChipChange("None")}>None</Dropdown.Item>
            <Dropdown.Item eventKey="2" style={concernStyle} active={isActive("Concern")} onClick={()=>props.handleChipChange("Concern")}>Concern</Dropdown.Item>
            <Dropdown.Item eventKey="3" style={taskStyle} active={isActive("Task")} onClick={()=>props.handleChipChange("Task")}>Task</Dropdown.Item>
            <Dropdown.Item eventKey="4" style={spikeStyle} active={isActive("Spike")} onClick={()=>props.handleChipChange("Spike")}>Spike</Dropdown.Item>
            <Dropdown.Item eventKey="5" style={choreStyle} active={isActive("Chore")} onClick={()=>props.handleChipChange("Chore")}>Chore</Dropdown.Item>
            <Dropdown.Item eventKey="6" style={technicalStyle} active={isActive("Technical")} onClick={()=>props.handleChipChange("Technical")}>Technical</Dropdown.Item>
        </DropdownButton>
        )
}

export default ChipSelector