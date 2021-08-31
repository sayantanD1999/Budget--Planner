import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
var i = 1;
function SetItems() {
  const { budget, dispatch } = useContext(AppContext);
  const [item, setItem] = useState("");
  const [expense, setExpense] = useState(0);

  const submit = () => {
    if (item == " " || expense <= 0 || budget<=0 ) {
      alert("All fields are required with valid input value");
    } else {
      var obj = {};
      obj.id = i;
      obj.item_name = item;
      obj.item_expense = expense;
      console.log(obj);
      dispatch({
        type: "setitems",
        payload: obj,
      });
      i = i + 1;
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Item Details</legend>
        <label htmlFor="">Item Name</label>
        <br />
        <input
          className="ip"
          type="text"
          id="item_name"
          value={item}
          placeholder="Enter Item"
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Expense</label>
        <br />
        <input
          className="ip"
          type="number"
          id="expense"
          inputMode="decimal"
          value={expense}
          placeholder="Enter Expense"
          onChange={(e) => {
            setExpense(parseInt(e.target.value));
          }}
        />
        <br />
        <button className="btn" type="submit" id="submit" onClick={submit}>
          Submit
        </button>
      </fieldset>
    </div>
  );
}

export default SetItems;
