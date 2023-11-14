import Button from "./Button";
function Hero() {
  return (
    <div className="hero-container">
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          paddingRight: 50,
        }}
      >
        <div className="hero-inner-container">
          <h1 className="primary-text-color">Little Lemon</h1>
          <h4 className="secondary-text-color">Chicago</h4>
          <p className="secondary-text-color">
            We are a family owned meterranean restaurant, focuused on
            traditional recipes served with a modern twist.
          </p>
          <Button text="Reserve a table" />
        </div>
      </div>

      <div />
    </div>
  );
}

export default Hero;
