import type { ButtonCalculatorProps } from "../types/ButtonCalculatorProps";
import type { ButtonCalculatorType } from "../types/ButtonCalculatorType";
import {Button} from "reactstrap";

const ButtonCalculator : ButtonCalculatorType = (props : ButtonCalculatorProps) => {

    

    return (
        <Button id={props.id} className={props.classNames}>
            {
                props.label
            }
        </Button>
    );
}

export default ButtonCalculator;