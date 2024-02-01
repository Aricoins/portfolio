import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    body {
     
        font-family: 'Roboto', sans-serif;
    }
    head {
 background-color: red;

    }
`

ReactDOM.createRoot(document.getElementById('root')).render(
<GlobalStyle>
    <App />
    </GlobalStyle>
)
