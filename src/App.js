import React from "react";
import SetBudget from "./Components/SetBudget";
import ShowDetails from "./Components/ShowDetails";
import SetItems from "./Components/SetItems";
import DisplayItems from "./Components/DisplayItems";
import Reset from "./Components/Reset";
import { AppProvider } from "./Context/AppContext";
import "./index.css";

function App() {
  return (
    <div>
      <center>
        <h1 className="header">Budget Planner</h1>
      </center>
      <div className="App">
        <AppProvider>
          <div>
            <div className="box1 box">
              <ShowDetails />
              <SetBudget />
              <SetItems />
            </div>
            <div className="box2 box">
              <DisplayItems />
              <Reset />
            </div>
          </div>
        </AppProvider>
      </div>
    </div>
  );
}

export default App;
