import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../app/slices/cartSlice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <div className={styles.card}>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} className={styles.img}/>
      </Link>
      {product.discount && <span className={styles.badge}>-{product.discount}%</span>}
      <div className={styles.info}>
        <Link to={`/products/${product.id}`} className={styles.title}>{product.title}</Link>
        <div className={styles.price}>
          <span className={styles.priceNow}>${product.price}</span>
          {product.oldPrice && <span className={styles.priceOld}>${product.oldPrice}</span>}
        </div>
        <button onClick={() => dispatch(addToCart({ id: product.id, title: product.title, price: product.price, image: product.image }))} className={styles.addBtn}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard