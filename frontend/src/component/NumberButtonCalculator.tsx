import type { CalculatorButtonType } from "../types/CalculatorButtonType";
import type { CalculatorButtonProps } from "../types/CalculatorButtonProps";
import ButtonCalculator from "./ButtonCalculator";

const NumberButtonCalculator : CalculatorButtonType<number> = ({label} : CalculatorButtonProps<number>) => {
    return (
        <ButtonCalculator label={label} id={`${label}-id-number-button`} className="number-button"/>
    );
}

export default NumberButtonCalculator;