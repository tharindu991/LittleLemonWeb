import Hero from "./Hero";
import restaurantfood from "../assets/restaurantfood.jpg";
import Button from "./Button";
import Card from "./Card";

function Main() {
  return (
    <main>
      <div className="banner-container">
        <Hero />
        <img
          class="banner-img-container"
          src={restaurantfood}
          alt="little lemon food"
        />
      </div>
      <div className="global-padding-vertical">
        <div className="actions-container">
          <h2 className="black-text-color">Specials</h2>
          <Button text="Online Menu" />
        </div>

        <div className="specials-card-wrapper">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}

export default Main;
