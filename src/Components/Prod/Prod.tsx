import React from "react";
import { IProd } from "../../models";
import { useAppDispatch } from "../../store/store";
import { handlChkd } from "../../store/features/prodSlice";
import "./block.scss";
import "./content.scss";
import "./bevel.scss";
import "./section.scss";
import "./toptext.scss";
import "./niamushka.scss";
import "./taste.scss";
import "./portion.scss";
import "./cat.scss";
import "./circle.scss";
import "./buy.scss";
import Disable from "../Disable/Disable";

interface ProdProps {
  props: IProd;
}

export default function Prod({ props }: ProdProps) {
  const dispatch = useAppDispatch();
  const chkd = () => dispatch(handlChkd(props));
  const circleDisable = (active: boolean, chek: boolean) => {
    if (active !== true) {
      return "block__circle-disable";
    } else if (chek) {
      return "block__circle-chk";
    } else {
      return "block__circle";
    }
  };

  const brdDisable = (active: boolean, chek: boolean) => {
    if (active !== true) {
      return "block__border-disable";
    } else if (chek) {
      return "block__border-chk";
    } else {
      return "block__border";
    }
  };

  return (
    <div className="block">
      <div
        className={props.active ? "block__content" : "block__content-disable"}
        onClick={chkd}
      >
        {props.active === false && <Disable />}
        <div className={"bef " + brdDisable(props.active, props.check)}></div>
        <div className="block__bevel">
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
        </div>
        <div className={"aft " + brdDisable(props.active, props.check)}></div>
        <div
          className={
            "block__section border-top-0 " +
            brdDisable(props.active, props.check)
          }
        >
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
          <div className={circleDisable(props.active, props.check)}>
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
          <a href="#none" className="block__buy-btn" onClick={chkd}>
            купи.
          </a>
        </p>
      ) : (
        <p className="block__buy text-warning">{props.footend}</p>
      )}
    </div>
  );
}
