import type { BoardButtonProps } from "../types/BoardButtonProps";
import type { BoardButtonType } from "../types/BoardButtonType";
import type { ButtonCalculatorProps } from "../types/ButtonCalculatorProps";
import ButtonCalculator from "./ButtonCalculator";

const BoardButton : BoardButtonType = ({nameBoard = "", idBoard = "", buttons = []} : BoardButtonProps) => {
    return (
        <div id={`${idBoard}`} className={nameBoard}>
            {
                buttons.map((btn : ButtonCalculatorProps) => (
                    <ButtonCalculator 
                        label={btn.label}
                        id={btn.id}
                    />
                ))
            }
        </div>
    );
}

export default BoardButton;