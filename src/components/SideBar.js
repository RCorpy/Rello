import React, {useState} from "react";
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

            <div className="sidebar">
                <div className="sidebarcontainer nav-item">
                    <button className="sidebaritem" onClick={() => setAboutModalShow(true)}>Acerca de este tablero</button>
                    <AboutModal
                        show={aboutModalShow}
                        onHide={() => setAboutModalShow(false)}
                    />
                </div>
                <div className="sidebarcontainer nav-item">
                    <button className="sidebaritem" onClick={() => setChangeBackgroundModalShow(true)}>Cambiar de fondo</button>
                    <ChangeBackgroundModal
                        show={changeBackgroundModalShow}
                        onHide={() => setChangeBackgroundModalShow(false)}
                    />
                </div>
                <div className="sidebarcontainer nav-item">
                    <button className="sidebaritem" onClick={() => setSearchCardModalShow(true)}>Buscar Tarjeta</button>
                    <SearchCardModal
                        show={searchCardModalShow}
                        onHide={() => setSearchCardModalShow(false)}
                    />
                </div>
                <div className="sidebarcontainer nav-item">
                    <button className="sidebaritem" onClick={() => setCreateColumShow(true)}>Crear Columna</button>
                    <CreateColumModal
                        show={createColumShow}
                        onHide={() => setCreateColumShow(false)}
                    />
                </div>
                <div className="sidebarcontainer nav-item">
                    <button className="sidebaritem" onClick={() => setDeleteColumShow(true)}>Borrar Columna</button>
                    <DeleteColumnModal
                        show={deleteColumShow}
                        onHide={() => setDeleteColumShow(false)}
                    />
                </div>
            </div>

        </>
        );
  };

  export default Sidebar