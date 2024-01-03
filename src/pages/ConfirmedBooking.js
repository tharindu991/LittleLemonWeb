import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Title from "../components/Title";

const Home = () => {
  return (
    <div>
      <Nav />
      <Title text={"Booking has been confirmed!"} />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
