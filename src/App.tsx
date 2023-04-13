import React from "react";
import Products from "./Components/Products/Products";
import Header from "./Components/Header/Header";
import "./app.scss";

function App() {
  return (
    <div className="gradient">
      <Header />
      <Products />
    </div>
  );
}

export default App;
