
// IMPORTACIONES

//Modulos / Dependencias
import React from 'react';
import ReactDOM from 'react-dom/client';

// ESTILO
import './index.css';


// COMPONENTES
import App from './App';


// WEB VITALS/CORE
import reportWebVitals from './reportWebVitals';


// LOGICA
// Selector base de JS
const root = ReactDOM.createRoot(document.getElementById('root'));

// Aca se renderiza la app 

root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
