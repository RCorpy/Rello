import React, {useState} from 'react'
import Card from './card'
import {connect} from 'react-redux'
import CreateModal from './CreateCardModal'
import ModifyCardModal from './modifyCardModal'
import './column.css'

function Column(props){
    const [createModalShow, setCreateModalShow] = useState(false);
    const [modifyCardModalShow, setModifyCardModalShow] = useState(false);
    const [indexForCardmodal, setIndexForCardModal] = useState(0)

    return(
        <div className="col-sm">
            <div className="column-title">
                {props.state[props.index].title}
            </div>
            <div className="cardContainer">
                {props.state[props.index].cards.map((card, index) => 
                    <span style={{ cursor: "pointer" }} onClick={()=> {setIndexForCardModal(index); setModifyCardModalShow(true)}}>
                        <Card key={index} columnIndex={props.index} cardIndex={index}  />
                    </span>)}
            </div>
            <div className="bottomTag" onClick={()=>setCreateModalShow(true)}>Añadir tarjeta +</div>
            <CreateModal
                show={createModalShow}
                onHide={() => setCreateModalShow(false)}
                columnIndex={props.index}
            />
            <ModifyCardModal
                show={modifyCardModalShow}
                onHide={() => setModifyCardModalShow(false)}
                columnIndex={props.index}
                cardIndex={indexForCardmodal}
            />
         </div>
    )
}

const connectedColumn = connect(state => ({state:state}), null)(Column)
export default connectedColumn;