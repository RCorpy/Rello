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
    const [dragIndex, setDragIndex] = useState(0)

    const thisColumnIndex = props.index
    const thisColumn = props.state[thisColumnIndex]

    return(
        <div className="col-sm" >
            <div
                className="column-title"
                onDragOver={
                    (e)=>{
                        e.preventDefault();
                        setDragIndex(0)
                    }
                }
                onDrop={(e)=>props.moveCard(e.dataTransfer.getData("initialPos"), [thisColumnIndex, dragIndex])}
            >
                {thisColumn.title}
            </div>
            <div
                className="cardContainer"
                onDragOver={
                    (e)=>{
                        e.preventDefault();
                    }
                }
                onDrop={(e)=>props.moveCard(e.dataTransfer.getData("initialPos"), [thisColumnIndex, dragIndex])}
            >
                {thisColumn.cards.map((card, index) => 
                    <div
                        draggable
                        onDragStart={(e)=>e.dataTransfer.setData("initialPos", [thisColumnIndex, index])}
                        onDragOver={ 
                            (e)=>{
                                e.preventDefault();
                                setDragIndex(index)
                            }
                        }
                        style={{ cursor: "pointer" }}
                        onClick={()=> {
                            setIndexForCardModal(index);
                            setModifyCardModalShow(true)
                            }
                        }
                        key={index}
                    >
                        <Card  columnIndex={thisColumnIndex} cardIndex={index}  />
                    </div>)}
            </div>
            <div
                className="bottomTag"
                onClick={()=>setCreateModalShow(true)}
                onDragOver={
                    (e)=>{
                        e.preventDefault();
                        setDragIndex(thisColumn.cards.length)
                    }
                }
                onDrop={(e)=>props.moveCard(e.dataTransfer.getData("initialPos"), [thisColumnIndex, dragIndex])}
            >
                Añadir tarjeta +
            </div>
            <CreateModal
                show={createModalShow}
                onHide={() => setCreateModalShow(false)}
                columnIndex={thisColumnIndex}
            />
            <ModifyCardModal
                show={modifyCardModalShow}
                onHide={() => setModifyCardModalShow(false)}
                columnindex={thisColumnIndex}
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