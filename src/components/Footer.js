import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <section>
        <img src="logo.png" />
        <p className="footer-item">
          We are a family owned meterranean restaurant, <br />
          focused on traditional recipes <br />
          served with a modern twist.
        </p>
      </section>
      <section>
        <h4>Menu</h4>
        <div className="footer-content">
          <Link className="footer-item" to="/about">
            About
          </Link>
          <Link className="footer-item" to="/menu">
            Menu
          </Link>
          <Link className="footer-item" to="/booking">
            Reservations
          </Link>
          <Link className="footer-item" to="/order">
            Order Online
          </Link>
        </div>
      </section>
      <section>
        <h4>Contact</h4>
        <div className="footer-content">
          <p className="footer-item">
            No 111, Central London <br />
            E23 443
          </p>
          <p className="footer-item">+44 745 484 9877</p>
          <p className="footer-item">reservations@littlelemon.com</p>
        </div>
      </section>

      <section>
        <h4>Social Media</h4>
        <div className="footer-content">
          <a className="footer-item" href="#">
            Facebook
          </a>
          <a className="footer-item" href="#">
            Instagram
          </a>
          <a className="footer-item" href="#">
            Youtube
          </a>
        </div>{" "}
      </section>
    </footer>
  );
}

export default Footer;
