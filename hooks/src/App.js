import React, { useEffect, useReducer, useCallback } from "react";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import { defaultState } from "./data";
import reducer from "./reducer";

export const AppContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("items") || defaultState)
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state));
  }, [state]);

  const addItem = useCallback(
    (value) => {
      dispatch({
        type: "add",
        payload: value,
      });
    },
    [dispatch]
  );

  const makeAllUnpacked = useCallback(() => {
    dispatch({
      type: "allUnpacked",
    });
  }, [dispatch]);

  const packedItems = state.filter((item) => item.packed);
  const unPackedItems = state.filter((item) => !item.packed);

  return (
    <AppContext.Provider
      value={{
        dispatch,
      }}
    >
      <div className="container py-3">
        <NewItem addItem={addItem} />
        <div className="row">
          <div className="col-md-5">
            <ListItems title="Unpacked Users" items={unPackedItems} />
          </div>
          <div className="offset-md-2 col-md-5">
            <ListItems title="Packed Users" items={packedItems} />
            <button
              onClick={makeAllUnpacked}
              className="btn btn-danger btn-lg btn-block"
            >
              Mark All As Unpacked
            </button>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
