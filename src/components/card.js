import React from 'react';
import {connect} from 'react-redux'


function Card(props){

    const getCardFromColumn = () =>{
        return props.state[props.columnIndex].cards[props.cardIndex]
    }

    return(
        <div className="card w-100">
            <div className="card-body">
                <h5 className="card-title">{getCardFromColumn().header}</h5>
                <p className="card-text">{getCardFromColumn().body}</p>
                {JSON.stringify(getCardFromColumn(), null, 2)}
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