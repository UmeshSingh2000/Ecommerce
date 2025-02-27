import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import './scss/main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category_Products from './components/Category_Products.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import SearchPage from './components/SearchPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/category/:categoryId' element={<Category_Products />} />
                    <Route path='/search/:query' element={<SearchPage />} />
                </Routes>
            </BrowserRouter>
        
    </Provider>
)
