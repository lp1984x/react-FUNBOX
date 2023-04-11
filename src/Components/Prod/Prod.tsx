import React from "react";
import { IProd } from "../../models";

interface ProdProps {
  props: IProd;
}

export default function Prod({ props }: ProdProps) {
  return (
    <div className="block">
      <div className="block__content cursor">
        <div className="dis"></div>
        <div className="bef brd"></div>
        <div className="block__bevel">
          <p className="block__toptext">{props.top}</p>
        </div>
        <div className="aft brd"></div>
        <div className="block__section brd">
          <p className="block__niamushka">{props.head}</p>
          <p className="block__taste">{props.taste}</p>
          <p className="block__portions">{props.portion}</p>
          <img src="../image/cat.png" alt="" className="block__cat" />
          <div className="block__circle">
            <p className="block__weight">{props.weight}</p>
            <p className="block__kg">кг</p>
          </div>
        </div>
      </div>
      <p className="block__buy">
        Чего сидишь? Порадуй котэ, <span>купи.</span>
      </p>
    </div>
  );
}
