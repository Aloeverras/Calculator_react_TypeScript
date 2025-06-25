import type { JSX } from "react";
import CalculatorButtonComponent from "./component/CalculatorButtonComponent";


const App : () => JSX.Element = () => {
  return (
    <>
      <h1>Hello world</h1>
      <CalculatorButtonComponent children={5} id="5"/>
    </>
  );
}

export default App;