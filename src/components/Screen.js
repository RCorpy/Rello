import React from 'react'
import Column from './column'
import {connect} from 'react-redux'
import SideBar from './SideBar'
import './screen.css'


function Screen(props){
    return (
        <div className="App">
        
            <div class="screencontainer">
                <div id="sidebar-wrapper">      
                    <SideBar />
                </div>
                <div class="cardcols" >
                    <div className="screen">
                        <div className="screen row">
                            {props.state.map((column, index) =>(
                            <div>
                                <Column index={index} key={index} column={column}/>
                            </div>
                            ))}
                        </div>
                    </div>
                </div> 
            </div>


            
        </div>
    )
}


const connectedScreen = connect(state => ({state:state}), null)(Screen)
export default connectedScreen;