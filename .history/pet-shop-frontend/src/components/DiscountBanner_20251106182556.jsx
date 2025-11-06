<section className="discount-banner">

  <h2 className="discount-banner__title">5% off on the first order</h2>

  <div className="discount-banner__content">
  <div className="discount-banner__left">
      <img src="/Pets.jpg" alt="pets" className="discount-banner__image" />
    </div>

    <div className="discount-banner__form">
      <form>
        <input type="text" placeholder="Name" required />
        <input type="phone" placeholder="Phone number" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Get Your Discount</button>
      </form>
    </div>
  </div>

</section>

export default function DiscountBanner() {
    return <div>Discount Banner</div>;
  }