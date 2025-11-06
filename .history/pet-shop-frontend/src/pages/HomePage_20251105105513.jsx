import React, { useEffect } from 'react'
import Hero from '../components/Home/Hero'
import CategoriesPreview from '../components/Home/CategoriesPreview'
import DiscountBlock from '../components/Home/DiscountBlock'
import SaleList from '../components/Home/SaleList'
import API from '../api/axios'
import { useDispatch } from 'react-redux'
import { setCategories } from '../app/slices/categoriesSlice'
import styles from './HomePage.module.css'

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function load() {
      try {
        const { data } = await API.get('/categories/all')
        dispatch(setCategories(data))
      } catch (err) {
        console.error(err)
      }
    }
    load()
  }, [dispatch])

  return (
    <div className={styles.container}>
      <Hero />
      <CategoriesPreview />
      <DiscountBlock />
      <SaleList />
    </div>
  )
}

export default HomePage