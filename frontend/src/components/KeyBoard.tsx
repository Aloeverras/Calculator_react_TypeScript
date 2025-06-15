import type React from "react";
import type { PropsKeyBoard } from "../interfaces/PropsKeyBoard";
import { Button } from "reactstrap";

const KeyBoard : React.FC<PropsKeyBoard> = (props : PropsKeyBoard) => {
    return (
        <div>
            {
            props.buttonsBoard.map((btn : string) => (
                btn === "=" ? (
                    <Button className="span-two">=</Button>
                ) : (
                    <Button>{btn}</Button>
                )
            ))
        }
        </div>
    )
};

export default KeyBoard;