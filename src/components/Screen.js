import React from 'react'
import Column from './column'
import {connect} from 'react-redux'


function Screen(props){
    return (
        <div className="App">
            <div className="container">
            <div className="row">
                {props.state.map((column, index) => <Column index={index} column={column}/>)}
            </div>
            </div>
        </div>
    )
}


const connectedScreen = connect(state => ({state:state}), null)(Screen)
export default connectedScreen;