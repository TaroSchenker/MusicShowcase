import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ColourProvider from './context/ColourContext';
import App from "./App";


reactDom.render(
<ColourProvider>
    <BrowserRouter>   
          <App />         
      </BrowserRouter>  
</ColourProvider>  
, document.querySelector("#root"))

