import { useEffect, useState } from "react";
import type { ButtonCalculatorProps } from "../types/ButtonCalculatorProps";
import type { ButtonCalculatorType } from "../types/ButtonCalculatorType";
import {Button} from "reactstrap";

const ButtonCalculator : ButtonCalculatorType = ({label = "", id = "", classNames = "", isMono = false, ...rest} : ButtonCalculatorProps) => {

    label = isMono && label.length > 1 ? label.charAt(0) : label;

    const [labelHook, labelHookSet] = useState<string>(label);

    useEffect(() => {
        labelHookSet(label),
        [
            label,
            isMono
        ]
    })

    const HANDCLICK : () => void = () => {
        if (rest.onClick) {
            rest.onClick()
        } else {
            console.error("handclic error")
        }
    }

    return (
        <Button onClick={HANDCLICK}
        id={id}
        className={classNames}
        {...rest}>    
            {labelHook}
        </Button>
    );
}

export default ButtonCalculator;