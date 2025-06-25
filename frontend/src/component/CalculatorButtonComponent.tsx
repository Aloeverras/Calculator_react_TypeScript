import { useEffect, useState } from "react";
import type { CalculatorButtonProps } from "../types/CalculatorButtonProps";
import type { CalculatorButtonType } from "../types/CalculatorButtonType";
import {Button} from "reactstrap";

const CalculatorButtonComponent : CalculatorButtonType = ({label, id} : CalculatorButtonProps) => {

    const [btn, setBtn] = useState<string | number>(label);

    useEffect(() => {
        setBtn(label)
    }, [btn]);

    return (
        <Button id={id} key={`${id}-key`}>
            {
                btn
            }
        </Button>
    );
};

export default CalculatorButtonComponent;