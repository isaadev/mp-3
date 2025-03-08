import { useState } from "react";
import styled from "styled-components";


const CalculatorWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #C4A484;
  border-radius: 20px;
  border: 20px solid black;
  max-width: 400px;
  margin: auto;

  align-items: center;
`;

const Input = styled.input`
  text-align: center;
  background-color: black;
  color: white;
  max-width: 10rem;
  border-radius: 15px;
  padding: 0.5rem;
  margin: 0.5rem;
  border: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 0.7rem;
  border: none;
  border-radius: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  margin: 0.2rem;

  &:hover {
    background-color: #444;
  }

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const Result= styled.p<{neg: boolean}>`
  color: white;
  background-color: black;
  border-radius: 15px;
  max-width: 20rem;
  padding: 0.5rem;
  margin: auto;
  color: ${({ neg }) => (neg ? "red" : "white")};
  font-weight: bold;
`;

// TODO: need to set to red if neg
const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<string | number>("");

  const isNeg = () => {
    if (typeof result === "number" && result < 0){
      return true;
    } else {
      return false;
    }
  }

  const calculate = (op: string) => {
    const first = parseFloat(num1);
    const second = parseFloat(num2);

    if (isNaN(first) || isNaN(second)) {
      setResult("Invalid");
      return;
    }
    
    if (op ==="+") {
      setResult(first + second);
    } 
    else if (op === "-") {
      setResult(first - second);
    }
    else if (op === "*") {
      setResult(first * second);
    }
    else if (op === "/") {
      setResult(second !== 0 ? first / second : "Cannot divide by 0");
    }
    else if (op === "**") {
      setResult(first ** second);
    }
    else {
      setResult("");
    }
  };

  const clearFields = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <CalculatorWrapper>
      <h4>Calculator</h4>
      <label>First Number:</label>
      <Input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} />

      <label>Second Number:</label>
      <Input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} />

      <ButtonContainer>
        <Button onClick={() => calculate("+")}>+</Button>
        <Button onClick={() => calculate("-")}>-</Button>
        <Button onClick={() => calculate("*")}>*</Button>
        <Button onClick={() => calculate("/")}>/</Button>
        <Button onClick={() => calculate("**")}>**</Button>
        <Button onClick={clearFields}>Clear</Button>
      </ButtonContainer>
       <Result neg={isNeg}>
        {result !== "" ? `${result}` : ""}
      </Result>
    </CalculatorWrapper>
  );
};

export default Calculator;
