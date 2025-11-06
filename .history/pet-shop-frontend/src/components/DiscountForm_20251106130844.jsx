import { useState } from "react";
import "./DiscountForm.css";

export default function DiscountForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
              ✅ Thank you! We'll contact you soon!
            </p>
          )}
        </div>

        <div className="discount__image">
            <img src="/Pets.jpg" alt="Pets" />
            </div>
      </div>
    </section>
  );
}