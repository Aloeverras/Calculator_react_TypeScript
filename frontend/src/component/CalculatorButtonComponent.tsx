import { useEffect, useState, type ReactNode } from "react";
import type { CalculatorButtonProps } from "../types/CalculatorButtonProps";
import type { CalculatorButtonType } from "../types/CalculatorButtonType";
import {Button} from "reactstrap";

const CalculatorButtonComponent : CalculatorButtonType = ({children, id} : CalculatorButtonProps) => {

    const [btn, setBtn] = useState<ReactNode>(children);

    useEffect(() => {
        setBtn(children)
    }, [btn])

    return (
        <Button id={id} key={`${id}-key`}>
            {
                btn
            }
        </Button>
    );
};

export default CalculatorButtonComponent;