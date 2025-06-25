import type { CalculatorButtonType } from "../types/buttonType/CalculatorButtonType";
import type { CalculatorButtonProps } from "../types/buttonType/CalculatorButtonProps";
import ButtonCalculator from "./ButtonCalculator";

const NumberButtonCalculator: CalculatorButtonType<number> = ({ label }: CalculatorButtonProps<number>) => {
    return (
        <ButtonCalculator label={label} />
    );
}

export default NumberButtonCalculator;