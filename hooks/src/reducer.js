import { generate as id } from "shortid";

export default function (state, action) {
  switch (action.type) {
    case "ADD":
      return [{ id: id(), value: action.payload, packed: false }, ...state];
    case "ALLUNPACKED":
      return state.map((item) =>
        item.packed ? { ...item, packed: false } : item
      );
    case "TOGGLE":
      return state.map((item) =>
        item.id === action.payload ? { ...item, packed: !item.packed } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
