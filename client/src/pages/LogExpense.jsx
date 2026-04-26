import { useState } from "react";

function LogExpense() {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log(data);
      alert("Expense saved!");
    } catch (err) {
      console.log(err);
      alert("Something went wrong: ", err);
    }
  };

  return (
    <div className="px-4 pt-5" style={{ maxWidth: "480px", margin: "0 auto" }}>
      <h1 className="display-5 fw-bold mb-1">Log New Expense</h1>
      <p className="text-muted mb-4">Add a new expense to your tracker.</p>

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <div>
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="inputName"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            placeholder="e.g. Lunch"
            required
          />
        </div>

        <div>
          <label htmlFor="inputAmount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            id="inputAmount"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            className="form-control"
            placeholder="0.00"
            required
          />
        </div>

        <div>
          <label htmlFor="inputCategory" className="form-label">
            Category
          </label>
          <select
            name="category"
            id="inputCategory"
            value={form.category}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Health">Health</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Groceries">Groceries</option>
            <option value="Luxury">Luxury</option>
            <option value="Bills">Bills</option>
            <option value="Savings">Savings</option>
            <option value="Vacations">Vacations</option>
          </select>
        </div>

        <div>
          <label htmlFor="inputDate" className="form-label">
            Date
          </label>
          <input
            type="date"
            id="inputDate"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg mt-2">
          Log Expense
        </button>
      </form>
    </div>
  );
}

export default LogExpense;
