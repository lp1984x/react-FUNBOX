import React from "react";
import { IProd } from "../../models";
import { useAppDispatch } from "../../store/store";
import { handlChkd } from "../../store/features/prodSlice";
import "./block.scss";
import "./content.scss";
import "./back.scss";
import "./toptext.scss";
import "./niamushka.scss";
import "./taste.scss";
import "./portion.scss";
import "./cat.scss";
import "./circle.scss";
import "./buy.scss";
import Disabled from "../Disable/Disabled";

interface ProdProps {
  props: IProd;
}

export default function Prod({ props }: ProdProps) {
  const dispatch = useAppDispatch();
  const select = () => dispatch(handlChkd(props));

  const circleSelectDisable = (active: boolean, chek: boolean) => {
    if (active !== true) {
      return "block__circle-disable";
    } else if (chek) {
      return "block__circle-chk";
    } else {
      return "block__circle";
    }
  };

  const backSelectDisable = (active: boolean, chek: boolean) => {
    if (active !== true) {
      return "block__back-disable";
    } else if (chek) {
      return "block__back-select";
    } else {
      return "block__back";
    }
  };

  return (
    <section className="block">
      {props.active === false && <Disabled />}
      <div className={backSelectDisable(props.active, props.check)}>
        <div
          className={props.active ? "block__content" : "block__content-disable"}
          onClick={select}
        >
          <p
            className={
              props.check ? "block__toptext-chk mb-2" : "block__toptext mb-2"
            }
          >
            {props.top}
          </p>
          {props.check && (
            <p className="block__toptext-alt mb-2">{props.alt_top}</p>
          )}
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

          <div className={circleSelectDisable(props.active, props.check)}>
            <p className="block__weight">{props.weight}</p>
            <p className="block__kg">кг</p>
          </div>
        </div>
      </div>

      {props.check ? (
        <p className="block__buy">{props.footer}</p>
      ) : props.active ? (
        <p className="block__buy">
          Чего сидишь? Порадуй котэ,{" "}
          <a href="#none" className="block__buy-btn" onClick={select}>
            купи.
          </a>
        </p>
      ) : (
        <p className="block__buy text-warning">{props.footend}</p>
      )}
    </section>
  );
}
