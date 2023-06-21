import React, { useState } from "react";
import "../styles/styles.css";
const AdvanceTaxCalculator = () => {
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
      <h4 className="calculator-heading">
        ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24
      </h4>
      <form>
        <div className="grey-row content" id="tax-payer">
          <label>Tax Payer</label>
          {/* <input
            type="text"
            maxLength={10}
            value={basicSalary}
            onChange={(e) => setBasicSalary(parseInt(e.target.value))}
            onClick={() => handleInputClick("basicSalary")}
            className={`${
              visited.includes("basicSalary") && !basicSalary ? "visited" : ""
            }`}
          /> */}
          <select>
            <option value="">Select</option>
            <option value="">Individual</option>
            <option value="">HUF</option>
            <option value="">AOPs/BOI</option>
            <option value="">Domestic Company</option>
            <option value="">Foreign Company</option>
            <option value="">Firms</option>
            <option value="">LLP</option>
            <option value="">Co-operative Society</option>
          </select>
        </div>
        <div>
          <div className="content">
            <label>Whether opting for taxation under Section 115BAC?</label>
            <select>
              <option value="">Select</option>
              <option value="">Yes</option>
              <option value="">No</option>
            </select>
          </div>
          <div className="content">
            <label>Net Taxable Income</label>
            <input
              type="text"
              maxLength={10}
              value={da}
              onChange={(e) => setDa(parseInt(e.target.value))}
              onClick={() => handleInputClick("da")}
              className={`${visited.includes("da") && !da ? "visited" : ""}`}
            />
          </div>
        </div>
        <div className="grey-row content">
          <label>Income Tax</label>
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
          <label>Surcharge</label>
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
          <label>Education Cess</label>
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
          <label>Secondary and higher education cess</label>
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
        <div className="grey-row content">
          <label>Total Tax Liability</label>
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
          <label>Relief</label>
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
        <div className="grey-row content">
          <label>TDS/TCS/MAT (AMT) Credit Utilized</label>
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
          <label>Assessed Tax</label>
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

export default AdvanceTaxCalculator;
