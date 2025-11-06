import { useState } from "react";
import axios from "axios";
import "./DiscountForm.css"; // 🔹 Підключаємо CSS

export default function DiscountForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/discount", form);
      setSent(true);
    } catch (err) {
      console.error(err);
      alert("Error sending form");
    }
  };

  return (
    <section className="discount">
      <div className="discount__container">
        <div className="discount__text">
          <h2>5% off on the first order</h2>

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
            <p className="discount__success">
              ✅ Thank you! We’ll contact you soon!
            </p>
          )}
        </div>

        <div className="discount__image">
          <img src="/images/pets." alt="Pets" />
        </div>
      </div>
    </section>
  );
}

