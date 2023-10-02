import "./InvestmentForm.css";

const InvestmentForm = ({
  currentSavings,
  yearlySavings,
  interest,
  duration,
  setCurrentSavings,
  setYearlySavings,
  setInterest,
  setDuration,
  calculateHandler,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const userInput = {
      "current-savings": currentSavings,
      "yearly-contribution": yearlySavings,
      "expected-return": interest,
      duration: duration,
    };
    calculateHandler(userInput);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(Number(e.target.value))}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={(e) => setYearlySavings(Number(e.target.value))}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={interest}
            onChange={(e) => setInterest(Number(e.target.value))}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
