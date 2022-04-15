import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import "./App.css";
import NavBar from "./components/navbar/Navbar";
import Error from "./components/Error";
import PriceHistory from "./components/main/PriceHistory";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/pricehistory" />} />
        {/* <Route path="/" element={<h1>Home</h1>} />
        <Route path="register" element={<h1>Register</h1>} />
        <Route path="careers" element={<h1>career</h1>} /> */}

        <Route
          exact
          path="pricehistory"
          element={
            <>
              {/* <h1>Price History default Page</h1> */}
              <Outlet />{" "}
            </>
          }
        >
          <Route exact path=":productId" element={<PriceHistory />} />
        </Route>
        {/* <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<Navigate replace to="/404" />} /> */}
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/404" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
