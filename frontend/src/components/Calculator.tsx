import type React from "react";
import type { PropsCalculator } from "../interfaces/PropsCalculator";
import KeyBoard from "./KeyBoard";



const Calculator : React.FC<PropsCalculator> = () => {
    return (
        <main>
            <KeyBoard buttonsBoard={["/", "1", "2", "3", "*", "4", "5", "6", "+", "7", "8", "9", "+", "-", ".", "0", "="]}></KeyBoard>
        </main>
    );
};

export default Calculator;