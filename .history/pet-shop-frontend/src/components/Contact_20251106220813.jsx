<section className="contact" style={{ border: "2px solid red" }}>
  <h2 className="contact__title">Contact</h2>
  ...
</section>

import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__title">Contact</h2>

      <div className="contact__info-container">
        {/* Ліва колонка */}
        <div className="contact__column">
          <div className="contact__item">
            <h3>Phone</h3>
            <a href="tel:+493091588492">+49 30 915-88492</a>
          </div>

          <div className="contact__item">
            <h3>Address</h3>
            <a
              href="https://www.google.com/maps/place/Wallstra%C3%9Fe+9-13,+10179+Berlin,+Deutschland"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wallstraße 9-13, 10179 Berlin, Deutschland
            </a>
          </div>
        </div>

        {/* Права колонка */}
        <div className="contact__column">
          <div className="contact__item">
            <h3>Socials</h3>
            <div className="contact__socials">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instagram-icon.png"
                  alt="Instagram"
                  className="contact__icon"
                />
              </a>
              <a
                href="https://wa.me/493091588492"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/whatsapp-icon.png"
                  alt="WhatsApp"
                  className="contact__icon"
                />
              </a>
            </div>
          </div>

          <div className="contact__item">
            <h3>Working Hours</h3>
            <p>24 hours a day</p>
          </div>
        </div>
      </div>

      {/* Карта */}
      <div className="contact__map">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.935033171378!2d13.38909471583908!3d52.5189849798135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e0e73e5d2b%3A0x7f9d2a10b8452b3!2sWallstra%C3%9Fe+9-13%2C+10179+Berlin%2C+Germany!5e0!3m2!1sen!2sus!4v1704882800000!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}