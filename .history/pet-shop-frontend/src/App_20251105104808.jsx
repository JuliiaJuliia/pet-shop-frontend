import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import CategoryPage from './pages/CategoryPage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import DiscountPage from './pages/DiscountPage'
import NotFoundPage from './pages/NotFoundPage'

function App(){
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/categories" element={<CategoriesPage/>} />
        <Route path="/categories/:id" element={<CategoryPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/products/:id" element={<ProductPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/discount" element={<DiscountPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </MainLayout>
  )
}

export default App