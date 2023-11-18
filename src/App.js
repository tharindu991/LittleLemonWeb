import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Main from "./components/Main";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about" className="nav-item">About Little Lemon</Link>
	  </nav> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
