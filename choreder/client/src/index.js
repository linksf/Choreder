import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import Theme from './context/Theme'

ReactDOM.render(
  <Router >
    < Theme >
      <App/ ></Theme>
    </Router>
    , document.getElementById('root'))