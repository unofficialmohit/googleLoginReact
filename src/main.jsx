import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {GoogleOAuthProvider} from "@react-oauth/google";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='1035425147156-7im56s1u7bubdrutmmv4muae3ud1pdfm.apps.googleusercontent.com'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
)
