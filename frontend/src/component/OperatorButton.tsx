import type { CalculatorButtonProps } from "../types/CalculatorButtonProps";
import type { CalculatorButtonType } from "../types/CalculatorButtonType";
import type { OperatorType } from "../types/OperatorType";
import ButtonCalculator from "./ButtonCalculator";

const OperatorButton : CalculatorButtonType<OperatorType> = ({label} : CalculatorButtonProps<OperatorType>) => {
    return (
        <ButtonCalculator label={label} id={`${label}-id-opérator-button`} className="operator-button"/>
    );
}

export default OperatorButton;