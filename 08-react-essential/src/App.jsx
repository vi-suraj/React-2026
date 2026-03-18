import Header from "./components/Header";
import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [investmentValue, setInvestmentValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInput(investment, newValue) {
    setInvestmentValue((prevInvestment) => {
      return { ...prevInvestment, [investment]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput onHandleInput={handleInput} investValue={investmentValue} />
      <Results investValue={investmentValue} />
    </>
  );
}

export default App;
