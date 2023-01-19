import { Link } from "react-router-dom";
import "./Landing.css";
import Button from "./library/Button";

const Landing = () => {
  return (
    <div className="splash">
      <h1>Welcome to Lithia Motors Service!</h1>
      <img alt="Lithia Logo" src={require("../assets/images/logo.png").default} />
      <Link to="/services">
        <Button children="Get Started!" />
      </Link>
    </div>
  );
};

export default Landing;
