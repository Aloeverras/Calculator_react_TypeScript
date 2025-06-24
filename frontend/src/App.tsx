import type { JSX, ReactNode } from "react";
import CalculatorButton from "./component/CalculatorButton";
import type { ButtonProps } from "reactstrap";


const App : () => JSX.Element = () => {
  return (
    <>
      <h1>Hello world</h1>
      <CalculatorButton context={undefined} setState={function <K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<ButtonProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void {
        throw new Error("Function not implemented.");
      } } forceUpdate={function (callback?: (() => void) | undefined): void {
        throw new Error("Function not implemented.");
      } } render={function (): ReactNode {
        throw new Error("Function not implemented.");
      } } props={undefined} state={undefined}></>
    </>
  );
}

export default App;