import React from "react";
import {Nav, DropdownButton, Dropdown} from "react-bootstrap";
import './SideBar.css'
//import 'bootstrap/dist/css/bootstrap.min.css';


const Sidebar = props => {


    return (
        <>

            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                Acerca de este tablero
            </Nav.Item>
            <Nav.Item>
                Cambiar de fondo
            </Nav.Item>
            <Nav.Item>
                Buscar Tarjetas
            </Nav.Item>
            <Nav.Item>
                Crear columna
            </Nav.Item>
            <Nav.Item>
            <DropdownButton id="dropdown-item-button" title="Dropdown button">
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
            </Nav.Item>
            </Nav>

        </>
        );
  };

  export default Sidebar