import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import LogExpense from "./pages/LogExpense";
import Summary from "./pages/Summary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log" element={<LogExpense />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
