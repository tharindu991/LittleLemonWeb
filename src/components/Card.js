import salad from "../assets/greek_salad.jpg";
import delivery from "../assets/delivery.png";

function Card(props) {
  return (
    <div className="card-container">
      <img src={salad} alt="Greek Salad" className="card-img" />
      <div className="card-content">
        <div className="card-top-content">
          <h5>Greek Salad</h5>

          <h5 className="card-price-text">$12.99</h5>
        </div>

        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <div className="card-action-container">
          <h6>Order a delivery</h6>
          <img className="card-action-icon" src={delivery} alt="delivery" />
        </div>
      </div>
    </div>
  );
}

export default Card;
