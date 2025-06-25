import { useEffect, useState } from "react";
import type { CalculatorButtonProps } from "../types/CalculatorButtonProps";
import type { CalculatorButtonType } from "../types/CalculatorButtonType";
import {Button} from "reactstrap";
import type { LabelType } from "../types/LabelType";

const ButtonCalculator : CalculatorButtonType<LabelType<string | number>> = (
    {label, id, className} : CalculatorButtonProps<LabelType<string | number>>
) => {

    const [btn, setBtn] = useState<LabelType<string | number>>(label);

    useEffect(() => {
        setBtn(label)
    }, [btn])


    return (
        <Button id={`${id}-button-id`}
                className={className} 
                key={`${id}-button-key`}>
            {btn}
        </Button>
    );
};

export default ButtonCalculator;