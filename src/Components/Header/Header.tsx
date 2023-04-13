import React from "react";
import { Container } from "react-bootstrap";
import "./header.scss";

export default function Header() {
  return (
    <Container className="header text-center">
      <h1>Ты сегодня покормил кота?</h1>
    </Container>
  );
}
