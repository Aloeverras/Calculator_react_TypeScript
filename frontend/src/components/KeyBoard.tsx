import type React from "react";
import type { PropsKeyBoard } from "../interfaces/PropsKeyBoard";
import { Button, ButtonGroup } from "reactstrap";
import DisplayCalculator from "./DisplayCalculator";

const KeyBoard : React.FC<PropsKeyBoard> = (props : PropsKeyBoard) => {
    return (
        <div>
            <DisplayCalculator/>
            <ButtonGroup  className="calculator-grid d-grid">
            {
                props.buttonsBoard.map((btn : string) => (
                    btn === "=" || btn === "AC" ? (
                        <Button className="span-two">{btn}</Button>
                    ) : (
                        <Button>{btn}</Button>
                    )
                ))
            }
            </ButtonGroup>
        </div>
    )
};

export default KeyBoard;