import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from '../routes/Layout.jsx';
import DetailView from '../routes/DetailView';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
        <Route index={false} path="/releaseDetails/:title" element={<DetailView />} />    
      </Route>
    </Routes>
  </BrowserRouter>
)

