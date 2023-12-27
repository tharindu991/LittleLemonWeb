import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Main from "../components/Main";

function Home() {
  return (
    <div>
      <Nav />
      <div className="global-padding-vertical confirmed-booking-container">
        <p className="confirmed-text">Booking has been confirmed!</p>
      </div>
      <Main />

      <Footer />
    </div>
  );
}

export default Home;
