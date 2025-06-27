import { type JSX} from "react";
import CalBtnComponent from "./component/CalBtnComponent";

const App : () => JSX.Element = () => {
  return (
    <>
      <h1>Hello world</h1>
      {
        ["+", "-", "/", "*"].map((btn : string) => {
          let typeBtn : string = "";
          switch(btn){
            case "+":
              typeBtn = "plus";
                break;
            case "-":
              typeBtn = "moins";
                break;
            case "/":
              typeBtn = "division";
                break;
            case "*":
              typeBtn = "multiply";
                break;   
          }
          return (
            <CalBtnComponent label={btn} type="operator" data-testid={`button-${typeBtn}`} onClick={() => console.log(btn)}/>
          )
        })
      }
    </>
  );
}

export default App;