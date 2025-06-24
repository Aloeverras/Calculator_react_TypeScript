import { Button } from "reactstrap";
import type { CalculatorButtonProps } from "../types/CalculatorButtonProps";
import type { CalculatorButtonType } from "../types/CalculatorButtonType";
import { useEffect, useState } from "react";

const CalculatorButton : CalculatorButtonType = (buttonProps : CalculatorButtonProps) => {
    const [stateButton, setStateButton] = useState<string>("");

    useEffect(() => {
        if (typeof buttonProps.props.children === 'string') {
            setStateButton(buttonProps.props.children);
        } else {
            setStateButton(String(buttonProps.props.children))
        }
    }, [buttonProps.props.children])

    return (
        <>
            <Button {...buttonProps}>
                {
                    stateButton
                }
            </Button>
        </>
    )
};

export default CalculatorButton;