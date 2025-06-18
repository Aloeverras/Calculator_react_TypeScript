import type { CalculatorType } from "../types/CalculatorType";
import Board from "./Board";
import "../scss/calculator.scss"

const Calculator : CalculatorType = () => {
    return (
        <div id="calculator">
            <Board/>
        </div>
    );

};

export default Calculator;