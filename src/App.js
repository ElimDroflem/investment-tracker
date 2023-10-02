import React, { useState } from "react";
import Header from "./Components/Header";
import InvestmentForm from "./Components/InvestmentForm";
import InvestmentTable from "./Components/InvestmentTable";

function App() {
  // State Declarations
  // These states hold the values of the form fields and the calculated yearly data.
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [interest, setInterest] = useState(0);
  const [duration, setDuration] = useState(0);
  const [yearlyData, setYearlyData] = useState([]);

  // Handler Function
  // This function is triggered when the form is submitted.
  // It calculates the yearly data based on the user input and updates the yearlyData state.
  const calculateHandler = (userInput) => {
    const yearlyData = [];
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    let totalInterestGained = 0;
    let totalInvestedCapital = currentSavings;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterestGained += yearlyInterest;
      totalInvestedCapital += yearlyContribution;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterestGained: totalInterestGained,
        totalInvestedCapital: totalInvestedCapital,
      });
    }

    setYearlyData(yearlyData);
  };

  // Component Render
  // The component renders the Header, InvestmentForm, and either the InvestmentTable or a message,
  // depending on whether there is any yearly data available.
  return (
    <div>
      <Header />
      <InvestmentForm
        calculateHandler={calculateHandler}
        currentSavings={currentSavings}
        setCurrentSavings={setCurrentSavings}
        yearlySavings={yearlySavings}
        setYearlySavings={setYearlySavings}
        interest={interest}
        setInterest={setInterest}
        duration={duration}
        setDuration={setDuration}
      />
      {yearlyData.length > 0 ? (
        <InvestmentTable yearlyData={yearlyData} />
      ) : (
        <p className="noDataMessage">
          No data available. Please enter the investment details and click
          Calculate.
        </p>
      )}
    </div>
  );
}

export default App;
