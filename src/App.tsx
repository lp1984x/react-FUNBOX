import React from "react";
import "./Components/scss/style.scss";
import Products from "./Components/Products/Products";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="gradient">
      <Header />
      <Products />
    </div>
  );
}

export default App;
