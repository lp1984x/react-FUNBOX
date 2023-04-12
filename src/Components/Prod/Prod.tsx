import React from "react";
import { IProd } from "../../models";
import { useAppDispatch } from "../../store/store";
import { handlChkd } from "../../store/features/prodSlice";

interface ProdProps {
  props: IProd;
}

export default function Prod({ props }: ProdProps) {
  const dispatch = useAppDispatch();
  const chkd = () => dispatch(handlChkd(props));
  return (
    <div className="block">
      <div className="block__content cursor" onClick={chkd}>
        <div className="dis"></div>
        <div className="bef brd"></div>
        <div className="block__bevel">
          <p className="block__toptext mb-2">{props.top}</p>
        </div>
        <div className="aft brd"></div>
        <div className="block__section brd border-top-0">
          <p className="block__niamushka">{props.head}</p>
          <p className="block__taste">{props.taste}</p>
          <p className="block__portions">
            {props.portion}
            <br />
            {props.present && props.present}
            <br />
            {props.bonus && props.bonus}
          </p>
          <img src="../image/cat.png" alt="" className="block__cat" />
          <div className="block__circle">
            <p className="block__weight">{props.weight}</p>
            <p className="block__kg">кг</p>
          </div>
        </div>
      </div>
      <p className="block__buy">
        {props.check ? (
          props.footer
        ) : (
          <>
            Чего сидишь? Порадуй котэ,
            <div className="buy-btn" onClick={chkd}>
              <span>купи</span>.
            </div>
          </>
        )}
      </p>
    </div>
  );
}
