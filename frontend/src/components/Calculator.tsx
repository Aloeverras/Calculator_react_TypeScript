import type { CalculatorType } from "../types/CalculatorType";
import type { CalculatorProps } from "../props/CalculatorProps";
import type { JSX } from 'react'
import KeyBoard from "./KeyBoard";

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
            <main>
                <KeyBoard buttons={
                    Array.from(
                        {length : 10},
                         (_ : unknown, index : number) => index.toString()
                         )
                         }
                         monoLetter={true}/>
            </main>
        </div>
    );

};

export default Calculator;