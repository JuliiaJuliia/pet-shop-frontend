import { useState } from "react";
import "./DiscountBanner.css";

export default function DiscountBanner() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(""); // 🔹 Додали стан для помилки

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // очищуємо помилку після введення
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Перевіряємо, чи всі поля заповнені
    if (!form.name || !form.phone || !form.email) {
      setError("Fill in this field");
      return;
    }

    setSent(true);
  };

  return (
    <section className="discount-banner">
      <div className="discount-banner__overlay">
        <div className="discount-banner__container">
          {/* Ліва частина: заголовок + картинка */}
          <div className="discount-banner__left">
            <h2>5% off on the first order</h2>
            <img src="/Pets.jpg" alt="Pets" />
          </div>

          {/* Права частина: форма */}
          <div className="discount-banner__right">
            {!sent ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
                <button type="submit">Get a discount</button>

                {/* 🔹 Виводимо повідомлення про помилку */}
                {error && (
                  <p className="discount-banner__error">{error}</p>
                )}
              </form>
            ) : (
              <p className="discount-banner__success">
                ✅ Thank you! We'll contact you soon!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}