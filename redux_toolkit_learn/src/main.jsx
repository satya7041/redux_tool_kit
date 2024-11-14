import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'

// createRoot(document.getElementById('root')).render(
ReactDOM.createRoot(document.getElementById('root')).render (
 
 <Provider store={store}>
  {/* <StrictMode> */}
    <App />
  {/* </StrictMode>, */}
  </Provider>
)
