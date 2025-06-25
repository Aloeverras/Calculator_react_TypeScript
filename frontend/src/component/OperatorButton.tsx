import type { CalculatorButtonProps } from "../types/buttonType/CalculatorButtonProps";
import type { CalculatorButtonType } from "../types/buttonType/CalculatorButtonType";
import type { OperatorType } from "../types/buttonType/OperatorType";
import ButtonCalculator from "./ButtonCalculator";

const OperatorButton: CalculatorButtonType<OperatorType> = ({ label }: CalculatorButtonProps<OperatorType>) => {
    return (
        <ButtonCalculator label={label}/>
    );
}

export default OperatorButton;