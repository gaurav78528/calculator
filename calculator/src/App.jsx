import React, { useState } from "react";
import HraCalculator from "./components/HraCalculator";
import AdvanceTaxCalculator from "./components/AdvanceTaxCalculator";
import "./styles/styles.css"
const App = () => {
  const [activeTab, setActiveTab] = useState("HRA");
  return (
    <div className="main-container">
      <div className="tabs-container flex-column-center">
        <div className="tabs flex-center">
          <button
            id={`${activeTab === "HRA" ? "active-tab" : "inactive-tab"}`}
            onClick={() => setActiveTab("HRA")}
          >
            HRA Calculator
          </button>
          <button
            id={`${activeTab === "ADVANCE" ? "active-tab" : "inactive-tab"}`}
            onClick={() => setActiveTab("ADVANCE")}
          >
            Advance Calculator
          </button>
        </div>
        {activeTab === "HRA" ? <HraCalculator /> : <AdvanceTaxCalculator />}
      </div>
    </div>
  );
};

export default App;
