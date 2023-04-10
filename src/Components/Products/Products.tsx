import React, { useState } from "react";

export default function Products() {
  const [info, setInfo] = useState([
    {
      top: "Сказочное заморское яство",
      head: "Нямушка",
      taste: "с фуа-гра",
      portion: "10 порций мышь в подарок",
      weight: "0,5",
      active: true,
    },
    {
      top: "Сказочное заморское яство",
      head: "Нямушка",
      taste: "с рыбой",
      portion: "40 порций 2 мыши в подарок",
      weight: "2",
      active: true,
    },
    {
      top: "Сказочное заморское яство",
      head: "Нямушка",
      taste: "с курой",
      portion: "100 порций 5 мышей в подарок заказчик доволен",
      weight: "5",
      active: false,
    },
  ]);
  return {};
}
