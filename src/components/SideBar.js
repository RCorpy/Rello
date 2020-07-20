import React, {useState} from "react";
import {Nav} from "react-bootstrap";
import './SideBar.css'
import AboutModal from './AboutModal'
import ChangeBackgroundModal from './ChangeBackgroundModal'
import SearchCardModal from './SearchCardModal'
import CreateColumModal from './CreateColumnModal'
import DeleteColumnModal from './DeleteColumnModal'


const Sidebar = props => {

    const [aboutModalShow, setAboutModalShow] = useState(false);
    const [changeBackgroundModalShow, setChangeBackgroundModalShow] = useState(false);
    const [searchCardModalShow, setSearchCardModalShow] = useState(false);
    const [createColumShow, setCreateColumShow] = useState(false);
    const [deleteColumShow, setDeleteColumShow] = useState(false);

    return (
        <>

            <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky"></div>
                <Nav.Item className="sidebarcontainer">
                    <button className="sidebaritem" onClick={() => setAboutModalShow(true)}>Acerca de este tablero</button>
                    <AboutModal
                        show={aboutModalShow}
                        onHide={() => setAboutModalShow(false)}
                    />
                </Nav.Item>
                <Nav.Item className="sidebarcontainer">
                    <button className="sidebaritem" onClick={() => setChangeBackgroundModalShow(true)}>Cambiar de fondo</button>
                    <ChangeBackgroundModal
                        show={changeBackgroundModalShow}
                        onHide={() => setChangeBackgroundModalShow(false)}
                    />
                </Nav.Item>
                <Nav.Item className="sidebarcontainer">
                    <button className="sidebaritem" onClick={() => setSearchCardModalShow(true)}>Buscar Tarjeta</button>
                    <SearchCardModal
                        show={searchCardModalShow}
                        onHide={() => setSearchCardModalShow(false)}
                    />
                </Nav.Item>
                <Nav.Item className="sidebarcontainer">
                    <button className="sidebaritem" onClick={() => setCreateColumShow(true)}>Crear Columna</button>
                    <CreateColumModal
                        show={createColumShow}
                        onHide={() => setCreateColumShow(false)}
                    />
                </Nav.Item>
                <Nav.Item className="sidebarcontainer">
                    <button className="sidebaritem" onClick={() => setDeleteColumShow(true)}>Borrar Columna</button>
                    <DeleteColumnModal
                        show={deleteColumShow}
                        onHide={() => setDeleteColumShow(false)}
                    />
                </Nav.Item>
            </Nav>

        </>
        );
  };

  export default Sidebar