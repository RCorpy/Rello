import React from 'react';
import './App.css';
import Screen from './components/Screen'
import store from './services/redux/store'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Screen />
      </Provider>
    </React.StrictMode>
  );
}



export default App;


// Hacer Boton de Crear Columna
// Boton Crear Card
// DONE - Boton Eliminar Card
// Boton Eliminar Columna
// Mover tarjetas