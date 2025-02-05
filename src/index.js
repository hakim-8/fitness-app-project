import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './App'

//const consoleWarn = console.warn;
//console.warn = (message, ...args) => {
// if (
//   !message.includes("React Router Future Flag Warning") &&
//  !message.includes("Relative route resolution within Splat routes")
// ) {
//    consoleWarn(message, ...args);
//  }
//};


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)