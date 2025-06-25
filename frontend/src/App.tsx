import { type JSX} from "react";
import NumberButtonCalculator from "./component/NumberButtonCalculator";

const App : () => JSX.Element = () => {
  return (
    <>
      <h1>Hello world</h1>
      <NumberButtonCalculator label={2}/>
    </>
  );
}

export default App;