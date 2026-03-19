import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ investValue }) {
  const resultData = calculateInvestmentResults(investValue);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.annualInvestment)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
