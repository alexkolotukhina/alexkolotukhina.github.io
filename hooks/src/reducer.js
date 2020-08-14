import { generate as id } from "shortid";

export default function (state, action) {
  switch (action.type) {
    case "add":
      return [{ id: id(), value: action.payload, packed: false }, ...state];
    case "allUnpacked":
      return state.map((item) =>
        item.packed ? { ...item, packed: false } : item
      );
    case "toggle":
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, packed: !item.packed }
          : item;
      });
    case "delete":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
