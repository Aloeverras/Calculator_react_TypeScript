import type React from "react";
import type { PropsCalculator } from "../interfaces/PropsCalculator";
import KeyBoard from "./KeyBoard";



const Calculator : React.FC<PropsCalculator> = () => {
    return (
        <main>
            <KeyBoard buttonsBoard={
                ["AC", "/", "1", "2", "3", "*", "4", "5", "6", "+", "7", "8", "9", "+", "-", ".", "0", "="]
                }/>
        </main>
    );
};

export default Calculator;