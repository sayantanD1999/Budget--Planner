import { createContext, useReducer } from "react";

const reset = () => {
  localStorage.clear();
  localStorage.setItem("Budget", 0);
  return [];
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "setbudget":
      return {
        ...state,
        budget: action.payload,
      };
    case "setitems":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "delete_items":
      return {
        ...state, //spread operator getting all previous state
        //We're using the filter array method to remove the expense that has the ID which we received from the payload.
        items: state.items.filter(function (expense) {
          console.log(expense.id);
          return expense.id != action.payload;
        }),
      };

    // case "spent":
    //   return{
    //     ...state,
    //     spent:action.payload,
    //   }

    case "Reset":
      return {
        items: reset(),
      };
    default:
      return state;
  }
};

const initialstate = {
  budget: 0,
  // spent: 0,
  items: [],
};

export const AppContext = createContext();
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        items: state.items,
        spent: state.spent,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
