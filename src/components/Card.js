import delivery from "../assets/delivery.png";

function Card(props) {
  const { name, image, description, actionText, price, onClick } = props;
  return (
    <div className="card-container">
      <img src={image} alt="Greek Salad" className="card-img" />
      <div className="card-content">
        <div className="card-top-content">
          <h5>{name}</h5>

          <h5 className="card-price-text">{price}</h5>
        </div>

        <p>{description}</p>
        <div className="card-action-container" onClick={onClick}>
          <h6>{actionText}</h6>
          <img className="card-action-icon" src={delivery} alt="delivery" />
        </div>
      </div>
    </div>
  );
}

export default Card;
