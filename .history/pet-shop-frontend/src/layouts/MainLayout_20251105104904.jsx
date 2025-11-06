import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from './MainLayout.module.css'

const MainLayout = ({ children }) => (
  <div className={styles.page}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
)

export default MainLayout