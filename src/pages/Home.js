import Footer from "../components/Footer";
import Main from "../components/Main";
import Nav from "../components/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <Main showHero={true} />
      <Footer />
    </div>
  );
}

export default Home;
