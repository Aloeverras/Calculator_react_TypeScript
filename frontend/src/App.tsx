import { type JSX} from "react";
import ButtonCalculator from "./component/ButtonCalculator";

const App : () => JSX.Element = () => {
  return (
    <>
      <h1>Hello world</h1>
      <ButtonCalculator label={0}/>
    </>
  );
}

export default App;