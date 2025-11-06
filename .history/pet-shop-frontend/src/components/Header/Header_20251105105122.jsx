import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  const count = useSelector(state => state.cart.items.reduce((s,i)=>s+i.qty,0))
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/"><img src={logo} alt="logo" className={styles.logo} /></Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/">Main Page</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/products">All products</Link>
        <Link to="/discount">All sales</Link>
      </nav>
      <div className={styles.right}>
        <Link to="/cart" className={styles.cart}>
          <span className={styles.icon}>🛒</span>
          {count>0 && <span className={styles.count}>{count}</span>}
        </Link>
      </div>
    </header>
  )
}

export default Header