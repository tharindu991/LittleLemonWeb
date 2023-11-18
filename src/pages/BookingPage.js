import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function BookingPage() {
  return (
    <>
      <Nav />
      <div className="booking-page-container">
        <BookingForm />
      </div>

      <Footer />
    </>
  );
}

export default BookingPage;
