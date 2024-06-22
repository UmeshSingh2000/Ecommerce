import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category_Products from './components/Category_Products.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/category/:categoryId' element={<Category_Products />} />
        </Routes>
    </BrowserRouter>
)
