import React from 'react';
import ReactDOM from 'react-dom';
import {UglyThingsProvider} from "./UglyThingsContext.js"
import App from "./App"
import "./styles.css"

ReactDOM.render(
<UglyThingsProvider>
  <App />
 </UglyThingsProvider>
  , document.getElementById('root')
)    


