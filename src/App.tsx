import React from "react";
import Products from "./Components/Products/Products";
import Header from "./Components/Header/Header";
import "./app.scss";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="main">
      <Header />
      <Products />
    </Container>
  );
}

export default App;
