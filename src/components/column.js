import React, {useState} from 'react'
import Card from './card'
import {connect} from 'react-redux'
import CreateModal from './CreateCardModal'
import './column.css'

function Column(props){
    const [createModalShow, setCreateModalShow] = useState(false);

    return(
        <div className="col-sm">
            <div className="column-title">
                {props.state[props.index].title}
            </div>
            <div className="cardContainer">
                {props.state[props.index].cards.map((card, index) => <Card key={index} columnIndex={props.index} cardIndex={index} />)}
            </div>
            <div className="bottomTag" onClick={()=>setCreateModalShow(true)}>Añadir tarjeta +</div>
            <CreateModal
                    show={createModalShow}
                    onHide={() => setCreateModalShow(false)}
                    columnName={props.state[props.index].title}
            />
         </div>
    )
}

const connectedColumn = connect(state => ({state:state}), null)(Column)
export default connectedColumn;