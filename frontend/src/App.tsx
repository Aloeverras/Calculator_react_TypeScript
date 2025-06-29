import { type JSX} from "react";
import "../src/scss/App.scss"
import BoardBtn from "./component/BoardBtn";

const App : () => JSX.Element = () => {
  return (
    <>
      <h1>Hello world</h1> 
      <main>
        <BoardBtn boardType={"main"} buttonsCal={["AC", "C"]} />
        <BoardBtn boardType={"calcul"} buttonsCal={Array.from({length : 10}, (_ : unknown, k : number) => k !== 0 ? k.toString() : "1")}/>
      </main>
    </>
  );
}

export default App;