import type React from "react";
import type { PropsDisplayCalculator } from "../interfaces/PropsDisplayCalculator";

const DisplayCalculator : React.FC<PropsDisplayCalculator> = () => {
    return (
        <div className="output">
            <div className="previous-operand">3.2448</div>
            <div className="previous-current">78484</div>
         </div>
    );
};

export default DisplayCalculator;