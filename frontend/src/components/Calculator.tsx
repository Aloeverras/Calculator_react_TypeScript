import type { CalculatorType } from "../types/CalculatorType";
import type { CalculatorProps } from "../props/CalculatorProps";

const Calculator : CalculatorType = (props : CalculatorProps) => {
    return (
        <div>
            {
                props.title ? (
                    <h1>Calculatrice</h1>
                ) : <></>
            }
            <main></main>
        </div>
    );
};

export default Calculator;