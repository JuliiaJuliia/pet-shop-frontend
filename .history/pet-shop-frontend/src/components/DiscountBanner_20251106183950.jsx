import { useState } from "react";
import "./DiscountBanner.css";

export default function DiscountBanner() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true); // тут можна додати axios для відправки на сервер
  };

  return (
    <section className="discount-banner">
      <div className="discount-banner__overlay">
        <div className="discount-banner__content">
          <h2>🎉 Special Offer!</h2>
          <p>Get 10% off on your first order</p>

          {!sent ? (
            <form onSubmit={handleSubmit} className="discount-banner__form">
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
              <button type="submit">Claim Discount</button>
            </form>
          ) : (
            <p className="discount-banner__success">
              ✅ Thank you! We'll contact you soon!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}