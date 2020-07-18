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
                    <div
                        draggable
                        onDragStart={(e)=>e.dataTransfer.setData("initialPos", [props.index, index])}
                        onDragOver={(e)=>e.preventDefault()}
                        onDrop={(e)=>props.moveCard(e.dataTransfer.getData("initialPos"), [props.index, index])}
                        style={{ cursor: "pointer" }}
                        onClick={()=> {
                            setIndexForCardModal(index);
                            setModifyCardModalShow(true)
                            }
                        }
                        key={index}
                    >
                        <Card  columnIndex={props.index} cardIndex={index}  />
                    </div>)}
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
                columnindex={props.index}
                cardindex={indexForCardmodal}
            />
         </div>
    )
}

const connectedColumn = connect(state => ({state:state}), (dispatch)=>({
    moveCard: (initialPos, finalPos) => dispatch({
        type: "MOVE_CARD",
        initialPos : [parseInt(initialPos.split(",")[0]), parseInt(initialPos.split(",")[1])],
        finalPos: finalPos
    })
}))(Column)
export default connectedColumn;