import React, { useState } from "react";
import "../styles/styles.css"
const HraCalculator = () => {
  const [basicSalary, setBasicSalary] = useState(null);
  const [hraReceived, setHraReceived] = useState(null);
  const [rentPaid, setRentPaid] = useState(null);
  const [commission, setCommission] = useState(null);
  const [da, setDa] = useState(null);
  const [taxableHRA, setTaxableHRA] = useState(null);
  const [exemptedHRA, setExemptedHRA] = useState(null);
  const [metroCity, setMetroCity] = useState(false);
  const [visited, setVisited] = useState([]);
  // const calculate = () => {
  //   const totalSalary = basicSalary + commission + da;
  //   const actualHraReceived = Math.min(
  //     hraReceived,
  //     rentPaid,
  //     totalSalary * (metroCity ? 0.5 : 0.4)
  //   );
  //   const rentExceeds10Percent = rentPaid > totalSalary * 0.1;
  //   const hraExempt = actualHraReceived - (rentPaid - totalSalary * 0.1);

  //   setTaxableHRA(rentExceeds10Percent ? hraExempt : actualHraReceived);
  // };

  const handleCalculate = () => {
    const totalSalary = basicSalary + commission + da;
    const actualHraReceived = Math.min(
      hraReceived,
      rentPaid,
      totalSalary * (metroCity ? 0.5 : 0.4)
    );
    const rentExceeds10Percent = rentPaid > totalSalary * 0.1;
    const hraExempt = actualHraReceived - (rentPaid - totalSalary * 0.1);
    const taxableHRA = rentExceeds10Percent ? hraExempt : actualHraReceived;
    const exemptedHRA = actualHraReceived - taxableHRA;

    setTaxableHRA(taxableHRA);
    setExemptedHRA(exemptedHRA);
  };

  const handleReset = () => {
    setBasicSalary(null);
    setHraReceived(null);
    setRentPaid(null);
    setCommission(null);
    setDa(null);
    setTaxableHRA(null);
    setExemptedHRA(null);
    setMetroCity(null);
    setVisited([]);
  };

  const handleInputClick = (inputName) => {
    if (!visited.includes(inputName)) {
      setVisited((prevVisitedInputs) => [...prevVisitedInputs, inputName]);
    }
  };

  // console.log(metroCity);

  return (
    <div className="container">
      <h4 className="calculator-heading">HOUSE RENT ALLOWANCE</h4>
      <form>
        <div className="grey-row content">
          <label>Basic Salary</label>
          <input
            type="text"
            maxLength={10}
            value={basicSalary}
            onChange={(e) => setBasicSalary(parseInt(e.target.value))}
            onClick={() => handleInputClick("basicSalary")}
            className={`${
              visited.includes("basicSalary") && !basicSalary ? "visited" : ""
            }`}
          />
        </div>
        <div className="content">
          <label>DA forming part of salary</label>
          <input
            type="text"
            maxLength={10}
            value={da}
            onChange={(e) => setDa(parseInt(e.target.value))}
            onClick={() => handleInputClick("da")}
            className={`${visited.includes("da") && !da ? "visited" : ""}`}
          />
        </div>
        <div className="grey-row content">
          <label>Commission (as % of turnover achieved by the employee)</label>
          <input
            type="text"
            maxLength={10}
            value={commission}
            onChange={(e) => setCommission(parseInt(e.target.value))}
            onClick={() => handleInputClick("commission")}
            className={`${
              visited.includes("commission") && !commission ? "visited" : ""
            }`}
          />
        </div>

        <div className="content">
          <label>HRA Received</label>
          <input
            type="text"
            maxLength={10}
            value={hraReceived}
            onChange={(e) => setHraReceived(parseInt(e.target.value))}
            onClick={() => handleInputClick("hraReceived")}
            className={`${
              visited.includes("hraReceived") && !hraReceived ? "visited" : ""
            }`}
          />
        </div>

        <div className="grey-row content">
          <label>Rent Paid</label>
          <input
            type="text"
            maxLength={10}
            value={rentPaid}
            onChange={(e) => setRentPaid(parseInt(e.target.value))}
            onClick={() => handleInputClick("rentPaid")}
            className={`${
              visited.includes("rentPaid") && !rentPaid ? "visited" : ""
            }`}
          />
        </div>
        <div className="content">
          <label>Tick if residing in metro city</label>
          <div>
            <input
              type="checkbox"
              // ;
              // value={rentPaid}
              onChange={(e) => setMetroCity(event.target.checked)}
            />
            <span className="checkbox-text">(Tick if Yes)</span>
          </div>
        </div>
        <div className="grey-row content">
          <label>Exempted House Rent Allowance</label>
          <input
            type="number"
            value={exemptedHRA}
            disabled
            className="disabled"
          />
        </div>
        <div className="content">
          <label>Taxable House Rent Allowance</label>
          <input
            type="number"
            value={taxableHRA}
            disabled
            className="disabled"
          />
        </div>
        <div>{/* <label>: </label>
          <span>{hraExempt}</span> */}</div>
      </form>

      <div className="flex-center">
        <button className="calculate-btn btn" onClick={handleCalculate}>
          Calculate
        </button>
        <button className="reset-btn btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default HraCalculator;
