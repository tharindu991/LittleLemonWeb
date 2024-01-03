import "./App.css";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/booking-confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </div>
  );
};

export default App;
