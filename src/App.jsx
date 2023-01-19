import { Routes, Route } from "react-router-dom";
import Landing from "components/Landing";
import Services from "components/Services";
import Booking from "components/Booking";
import Success from "components/Success";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
};

export default App;
