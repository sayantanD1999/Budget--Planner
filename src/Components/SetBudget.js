import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

function SetBudget() {
  //   const { budget } = useContext(Context);
  const [Total_budget, setBudget] = useState(0);
  const { dispatch } = useContext(AppContext);
  const getBudget = () => {
    if(Total_budget<=0)
    {
      alert("Budget can't have zero or negative value");
    }
    else
    {
      dispatch({
        type: "setbudget",
        payload: Total_budget,
      });
      localStorage.setItem("Budget", Total_budget);
      setBudget(0);
    }
  };
  return (
    <div className="setBudget">
      <h2>Set Budget</h2>
      <div className="set_budget">
        <input
          className="ip2"
          type="number"
          name="budget"
          onChange={(e) => {
            setBudget(parseInt(e.target.value));
          }}
          id="budget"
          value={Total_budget}
          inputMode="numeric"
        />
        <button id="set" onClick={getBudget} className="btn">
          Set
        </button>
      </div>
    </div>
  );
}

export default SetBudget;
