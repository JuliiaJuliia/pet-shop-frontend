import { useState } from "react";
import "./DiscountBanner.css";

export default function DiscountBanner() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
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
          
          {/* Левая часть: заголовок + картинка */}
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
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Get a discount</button>
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