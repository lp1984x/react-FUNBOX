import React from "react";

export default function Prod() {
  return (
    <div className="block">
      <div className="block__content cursor">
        <div className="dis"></div>
        <div className="bef brd"></div>
        <div className="block__bevel">
          <p className="block__toptext">Сказочное заморское яство</p>
        </div>
        <div className="aft brd"></div>
        <div className="block__section brd">
          <p className="block__niamushka">Нямушка</p>
          <p className="block__taste">вкус</p>
          <p className="block__portions">порция</p>
          <img src="../image/cat.png" alt="" className="block__cat" />
          <div className="block__circle">
            <p className="block__weight">вес</p>
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
