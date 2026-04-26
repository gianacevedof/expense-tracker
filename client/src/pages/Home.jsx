import { Link } from "react-router-dom";
import heroImg from "../assets/home.svg";

function Home() {
  return (
    <div className="d-flex flex-column align-items-center px-4 pt-5 gap-4">
      <div className="text-center">
        <h1 className="display-4 fw-bold">Hello, Gian.</h1>
        <p className="text-muted fs-5">What's the damage today?</p>
      </div>
      <img src={heroImg} alt="Expense Tracker" style={{ width: "120px" }} />
      <div
        className="d-flex flex-column gap-3 w-100"
        style={{ maxWidth: "320px" }}
      >
        <Link to="/log" className="btn btn-primary btn-lg">
          Log New Expense
        </Link>
        <Link to="/summary" className="btn btn-outline-primary btn-lg">
          View Summary
        </Link>
      </div>
    </div>
  );
}

export default Home;
