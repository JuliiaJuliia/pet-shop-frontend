import React from 'react'
import styles from './Hero.module.css'
import heroImg from '../../assets/hero.jpg'

const Hero = () => (
  <section className={styles.hero}>
    <img className={styles.bg} src={heroImg} alt="promo" />
    <div className={styles.content}>
      <h1>Amazing Discounts on Pets Products!</h1>
      <p className={styles.cta}><a href="/products" className={styles.btn}>Check out</a></p>
    </div>
  </section>
)

export default Hero