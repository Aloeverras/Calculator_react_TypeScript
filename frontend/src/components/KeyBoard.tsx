import type React from "react";
import type { PropsKeyBoard } from "../interfaces/PropsKeyBoard";
import { Button, ButtonGroup } from "reactstrap";

const KeyBoard : React.FC<PropsKeyBoard> = (props : PropsKeyBoard) => {
    return (
        <div className="calculator-gid">
            <div className="output">
                <div className="previous-operand"></div>
                <div className="previous-current"></div>
            </div>
            <ButtonGroup>
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