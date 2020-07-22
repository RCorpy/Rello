import React from 'react';
import {connect} from 'react-redux'


function Card(props){

    const getCardFromColumn = props.state[props.columnIndex].cards[props.cardIndex]
    
    const chipStyle = () => {
        switch(getCardFromColumn.chip){
            case 'None':
                return {display: "none"}
            case 'Concern':
                return {backgroundColor: 'lightgreen'}
            case 'Chore':
                return {backgroundColor: 'red'}
            case 'Task':
                return {backgroundColor: 'green'}
            case 'Spike':
                return {backgroundColor: 'orange'}
            case 'Technical':
                return {backgroundColor: 'lightblue'}

            default:
                return {} 
        }
    }

    const getChip = () => {
        if(getCardFromColumn.chip){
            return (<div style={chipStyle()} className="chip">{getCardFromColumn.chip}</div>)
        }
    }

    return(
        <div className="card w-100">
            {getChip()}
            <div className="card-body">
                <h5 className="card-title">{getCardFromColumn.header}</h5>
            </div>
        </div>
    )
}

const connectedCard = connect(state => ({state:state}), (dispatch)=>({
    deleteCard: (column, card) => dispatch({
        type:'DELETE_CARD',
        columnIndex: column ,
        cardIndex: card
    })

}))(Card)
export default connectedCard;