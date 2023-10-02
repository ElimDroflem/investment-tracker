import "./InvestmentTable.css";

const InvestmentTable = ({ yearlyData }) => (
  <table className="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {yearlyData.map((data, index) => (
        <tr key={index}>
          <td>{data.year}</td>
          <td>{data.savingsEndOfYear.toFixed(2)}</td>
          <td>{data.yearlyInterest.toFixed(2)}</td>
          <td>{data.totalInterestGained.toFixed(2)}</td>
          <td>{data.totalInvestedCapital.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default InvestmentTable;
