/* eslint-disable no-unused-vars */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
    </Routes>
  );
}

export default App;
