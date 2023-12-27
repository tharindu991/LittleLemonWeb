import Hero from "./Hero";
import restaurantfood from "../assets/restaurantfood.jpg";
import Button from "./Button";
import Card from "./Card";
import { specials } from "../Constants";
import Swal from "sweetalert2";

const Main = (props) => {
  return (
    <main>
      {props.showHero && (
        <div className="banner-container">
          <Hero />
          <img
            class="banner-img-container"
            src={restaurantfood}
            alt="little lemon food"
          />
        </div>
      )}

      <div className="global-padding-vertical">
        <div className="actions-container">
          <h2 className="black-text-color">Specials</h2>
          <Button text="Online Menu" />
        </div>

        <div className="specials-card-wrapper">
          {specials.map((item) => (
            <Card
              {...item}
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: `Confirm your ${item.name} order`,
                  icon: "warning",
                  iconColor: "#f4ce14",
                  showCancelButton: true,
                  confirmButtonColor: "#ee9972",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, order it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: "Ordered",
                      text: `Your ${item.name} order has been placed`,
                      icon: "success",
                      confirmButtonColor: "#ee9972",
                    });
                  }
                });
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
