import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import News from './pages/News'
import NewsId from './pages/NewsId'
import Products from './pages/Products'
import { useDispatch } from 'react-redux'
import { getProducts } from './api'
import { GET_PRODUCTS } from './redux/action'

export default function AllRoutes() {
  const dispatch = useDispatch()

  useEffect(()=>{
    const res = async () => {
      const data = await getProducts()
      console.log(data.data)
      dispatch({type: GET_PRODUCTS, payload: data.data})
    }
    res()
  },[])
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
