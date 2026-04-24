import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="welcome">
        <h1>Hello, Gian.</h1>
        <h3>What's the damage today?</h3>
      </div>
      <button className="btn">
        <Link to="/log">Log New Expense</Link>
      </button>
      <button className="btn">
        <Link to="/summary">View Your Summary</Link>
      </button>
    </>
  );
}

export default Home;
