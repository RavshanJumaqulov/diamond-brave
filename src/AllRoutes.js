import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import News from './pages/News'
import NewsId from './pages/NewsId'
import Products from './pages/Products'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/products' element={<Products />} />
        <Route path='/news' element={<News />} />
        <Route path='/news_id' element={<NewsId />} />
    </Routes>
  )
}
