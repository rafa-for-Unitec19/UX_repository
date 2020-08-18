import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || (operation === "÷" || operation === 'x' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    if (two === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
  /*
  if (operation === 'Pow(x)'){
    return one.pow(2).toString();
  }
  if (operation === 'Root(x)'){
    return one.sqrt().toString();
  }
  if (operation === 'Abs(x)'){
    return one.abs().toString();
  }*/
  throw Error(`Unknown operation '${operation}'`);
}
