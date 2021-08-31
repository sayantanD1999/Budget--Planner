import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
function DisplayItems() {
  const { items } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  const totalexpense = items.reduce((total, item) => {
    return (total = total + item.item_expense);
  }, 0);

  const [update_list, set_Update_list] = useState(items || []);

  useEffect(() => {
    set_Update_list(items);
    console.log(items);
  }, [items]);

  const del = (e) => {
    console.log(e);
    dispatch({
      type: "delete_items",
      payload: e,
    });
  };
  localStorage.setItem("list", JSON.stringify(items));
  // localStorage.clear();
  return (
    <div className="displayItems">
      <center>
        <h2>Items</h2>
      </center>
      {update_list.map((e) => {
        return (
          <div className="Item">
            <div>
              <h3>{e.item_name}</h3>
            </div>
            <div>
              <h3>₹{e.item_expense}</h3>
            </div>
            <div>
              {" "}
              <span
                id={e.id}
                onClick={(p) => {
                  del(p.target.id);
                }}
                className="btn cross"
              >
                &times;
              </span>
            </div>
          </div>
        );
      })}

      <h2 className="spent">Spent : ₹{totalexpense}</h2>
    </div>
  );
}

export default DisplayItems;
