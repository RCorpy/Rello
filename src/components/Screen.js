import React from 'react'
import Column from './column'
import {connect} from 'react-redux'
import SideBar from './SideBar'
import {Container, Row, Col} from 'react-bootstrap'
import './screen.css'


function Screen(props){
    return (
        <div className="App">
        
            <div class="container-fluid">
                <div class="row">
                    <div id="sidebar-wrapper" class="col-2">      
                      <SideBar />
                    </div>
                    <div class="col-10" >
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


            
        </div>
    )
}


const connectedScreen = connect(state => ({state:state}), null)(Screen)
export default connectedScreen;