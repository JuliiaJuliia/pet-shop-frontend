import React from 'react'
import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.contact}>
      <h3>Contact</h3>
      <div className={styles.row}>
        <div className={styles.card}>
          <div className={styles.label}>Phone</div>
          <div className={styles.value}>+49 30 915-88492</div>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Socials</div>
          <div className={styles.value}>[instagram] [whatsapp]</div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.card}>
          <div className={styles.label}>Address</div>
          <div className={styles.value}>Wallstraße 9-13, 10179 Berlin, Deutschland</div>
        </div>
        <div className={styles.card}>
          <div className={styles.label}>Working Hours</div>
          <div className={styles.value}>24 hours a day</div>
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          style={{ border: 0, width: '100%', height: 220 }}
        />
      </div>
    </div>
  </footer>
)

export default Footer