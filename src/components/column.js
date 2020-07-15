import React from 'react'
import Card from './card'
import {connect} from 'react-redux'

function Column(props){
    return(
        <div className="col-sm">
            <div className="column-title">
                {props.state[props.index].title}
            </div>
            {props.state[props.index].cards.map((card, index) => <Card columnIndex={props.index} cardIndex={index} />)}

            
         </div>
    )
}

const connectedColumn = connect(state => ({state:state}), null)(Column)
export default connectedColumn;