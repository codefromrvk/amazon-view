import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,Outlet
} from "react-router-dom";

import "./App.css";
import NavBar from "./components/navbar/Navbar";
import PriceHistory from "./components/price/PriceHistory";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="register" element={<h1>Register</h1>} />
        <Route path="careers" element={<h1>career</h1>} />
        <Route exact path="pricehistory/:productId"  element={<PriceHistory />}/>
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
