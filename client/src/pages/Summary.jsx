import { useState, useEffect } from "react";

function Summary() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((err) => console.log(err));
  }, []);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyExpenses = expenses.filter((exp) => {
    const expDate = new Date(exp.date);
    return (
      expDate.getMonth() === currentMonth &&
      expDate.getFullYear() === currentYear
    );
  });

  const total = monthlyExpenses.reduce(
    (sum, exp) => sum + parseFloat(exp.amount),
    0,
  );

  const grouped = monthlyExpenses.reduce((acc, exp) => {
    if (!acc[exp.category]) acc[exp.category] = [];
    acc[exp.category].push(exp);
    return acc;
  }, {});

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="px-4 pt-5" style={{ maxWidth: "480px", margin: "0 auto" }}>
      <h1 className="display-5 fw-bold mb-1">This Month</h1>
      <p className="text-muted mb-4">Here's where your money went.</p>

      <div className="card mb-4">
        <div className="card-body text-center">
          <p className="text-muted mb-1">Total Spent</p>
          <h2 className="fw-bold">${total.toFixed(2)}</h2>
        </div>
      </div>

      {Object.keys(grouped).map((category) => (
        <div key={category} className="mb-4">
          <h6 className="text-uppercase text-muted fw-bold mb-2">{category}</h6>
          {grouped[category].map((exp) => (
            <div
              key={exp.id}
              className="d-flex justify-content-between align-items-center py-2 border-bottom"
            >
              <span>{exp.name}</span>
              <span className="text-muted" style={{ fontSize: "13px" }}>
                {formatDate(exp.date)}
              </span>
              <span className="fw-500">
                ${parseFloat(exp.amount).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Summary;
