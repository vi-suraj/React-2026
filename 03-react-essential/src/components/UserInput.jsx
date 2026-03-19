export default function UserInput({ onHandleInput, investValue }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input type="number" value={investValue.initialInvestment} required onChange={(e) => onHandleInput("initialInvestment", e.target.value)} />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input type="number" value={investValue.annualInvestment} required onChange={(e) => onHandleInput("annualInvestment", e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input type="number" value={investValue.expectedReturn} required onChange={(e) => onHandleInput("expectedInvestment", e.target.value)} />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input type="number" value={investValue.duration} required onChange={(e) => onHandleInput("duration", e.target.value)} />
        </p>
      </div>
    </section>
  );
}
