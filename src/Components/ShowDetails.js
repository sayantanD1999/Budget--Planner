import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function ShowDetails() {
  const { budget, items } = useContext(AppContext);

  const totalexpense = items.reduce((total, item) => {
    return (total = total + item.item_expense);
  }, 0);

  // const update=(e)=>{
  //   dispatch({
  //     type:"spent",
  //     payload:e
  //   });
  // }

  // update(totalexpense);

  if (totalexpense > budget) {
    alert("Expense exceeded budget");
  }
  return (
    <div className="details">
      <h2 className="show_budget">Budget : ₹{budget}</h2>
      <h2 className="show_remaining">Remaining : ₹{budget - totalexpense}</h2>
    </div>
  );
}

export default ShowDetails;
