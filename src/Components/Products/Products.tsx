import React from "react";
import { Container } from "react-bootstrap";
import { useAppSelector } from "../../store/store";
import Prod from "../Prod/Prod";

export default function Products() {
  const prods = useAppSelector((state) => state.prod.prods);
  return (
    <Container className="d-flex flex-wrap justify-content-center">
      {prods.map((item) => (
        <Prod props={item} key={item.id} />
      ))}
    </Container>
  );
}
