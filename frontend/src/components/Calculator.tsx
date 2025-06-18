import type { CalculatorType } from "../types/CalculatorType";
import ButtonCalculator from "./ButtonCalculator";

const Calculator : CalculatorType = () => {
    return (
        <>
            <ButtonCalculator label="test" id="test-id"/>
        </>    
    );

};

export default Calculator;