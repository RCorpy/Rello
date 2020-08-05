import React from 'react'
import Column from './column'
import {connect} from 'react-redux'
import SideBar from './SideBar'
import {Container, Row, Col} from 'react-bootstrap'
import './screen.css'


function Screen(props){
    return (
        <div className="App">
        
            <Container fluid>
                <Row>
                    <Col id="sidebar-wrapper">      
                      <SideBar />
                    </Col>
                    <Col >
                        <div className="screen">
                            <div className="screen row">
                                {props.state.map((column, index) =>(
                                <div>
                                    <Column index={index} key={index} column={column}/>
                                </div>
                                ))}
                            </div>
                        </div>
                    </Col> 
                </Row>
            </Container>


            
        </div>
    )
}


const connectedScreen = connect(state => ({state:state}), null)(Screen)
export default connectedScreen;