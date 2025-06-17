import type { CalculatorType } from "../types/CalculatorType";
import KeyBoard from "./KeyBoard";

const Calculator : CalculatorType = () => {
    return (
        <>
            <KeyBoard 
            nameListButton="numberButton"
            keyButtons={
                ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
            }
            />
        </>    
    );

};

export default Calculator;