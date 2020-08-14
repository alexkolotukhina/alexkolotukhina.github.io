import React, { useContext } from "react";
import "./Item.css";
import { AppContext } from "../App";

const Item = (props) => {
  console.log("Rendered");
  const { dispatch } = useContext(AppContext);

  return (
    <li className="item-box">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={props.item.packed}
          onChange={() =>
            dispatch({
              type: "toggle",
              payload: props.item.id,
            })
          }
          id={props.item.id}
        />
        <label className="form-check-label" htmlFor={props.item.id}>
          {" "}
          {props.item.value}
        </label>
      </div>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() =>
          dispatch({
            type: "delete",
            payload: props.item.id,
          })
        }
      >
        Remove
      </button>
    </li>
  );
};

export default React.memo(Item);
