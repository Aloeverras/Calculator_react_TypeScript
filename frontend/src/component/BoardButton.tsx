import type React from "react"
import type { BoardButtonProps } from "../interfaces/BoardButtonProps"
import { Button } from "reactstrap";

const BaordButton : React.FC<BoardButtonProps> = ({labelBoard, btnString} : BoardButtonProps) => {

    const classNameBtn : string[] = ["calculator-button"];

    btnString.forEach((btnString : string) => {
        if (btnString === "+" || btnString === "-" || btnString === "/" || btnString === "*") {
            classNameBtn.push("operator");
        } else if (btnString === "AC" || btnString === "C") {
            classNameBtn.push("main-btn");
        } else if (Number(btnString)) {
            classNameBtn.push("number-btn");
            if (Number(btnString) % 2 === 0 && Number(btnString) !== 0) {
                classNameBtn.push("paire-number")
            } else {
                classNameBtn.push("impaire-number")
            }
        };
    });

    return (
        <div id={labelBoard}>
            {   
                btnString.map((btn : string, i : number) => (
                    <Button id={`${btn}-id-${i}`} key={`${btn}-key`} className={classNameBtn.join(" ")}>
                        {btn}
                    </Button>
                ))
            }
        </div>
    );
};

export default BaordButton;