import { type JSX} from "react";
import CalBtnComponent from "./component/CalBtnComponent";
import BaordButton from "./component/BoardButton";

const App : () => JSX.Element = () => {
  return (
    <>
      <h1>Hello world</h1>
      <BaordButton 
      labelBoard="numberBoard"
      btnString={
        Array.from({length : 10}, (_ : unknown, i : number) => i.toString())
      }/>
    </>
  );
}

export default App;