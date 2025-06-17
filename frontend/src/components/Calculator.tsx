import type { CalculatorType } from "../types/CalculatorType";
import type { CalculatorProps } from "../props/CalculatorProps";
import type { JSX } from 'react'

const Calculator : CalculatorType = (props : CalculatorProps) => {

    let content : JSX.Element | null;
    let title : string = "";

    if (props.title) {
        title = "Calculator";
        if (title === "Calculator") {
            content = <h1 className="fw-bold">{title}</h1>;
        } else {
            content = <h1>{title}</h1>;
        }
    } else {
        content = null;
    };

    return (
        <div>
            {content}
            <main></main>
        </div>
    );

};

export default Calculator;