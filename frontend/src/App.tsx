import { type JSX} from "react";
import CalBtnComponent from "./component/CalBtnComponent";

const App : () => JSX.Element = () => {
  return (
    <>
      <h1>Hello world</h1>
      <CalBtnComponent label={5}></CalBtnComponent>
    </>
  );
}

export default App;