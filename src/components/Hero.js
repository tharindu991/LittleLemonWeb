import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-content-container">
          <h2 className="primary-text-color">Little Lemon</h2>
          <h3 className="secondary-text-color">Chicago</h3>
          <p className="secondary-text-color">
            We are a family owned meterranean restaurant, focuused on
            traditional recipes served with a modern twist.
          </p>
          <Button
            text="Reserve a table"
            onClick={() => {
              navigate("/booking");
            }}
          />
        </div>
      </div>

      <div />
    </div>
  );
};

export default Hero;
