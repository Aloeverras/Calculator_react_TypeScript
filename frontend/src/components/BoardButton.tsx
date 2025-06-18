import type { BoardButtonProps } from "../types/BoardButtonProps";
import type { BoardButtonType } from "../types/BoardButtonType";
import type { ButtonCalculatorProps } from "../types/ButtonCalculatorProps";
import ButtonCalculator from "./ButtonCalculator";

const BoardButton : BoardButtonType = (
    {
        nameBoard = "",
        idBoard = "", 
        buttons = []
    }
     : BoardButtonProps) => {
    

    return (
        <div  
            id={`${idBoard}-id-board`} 
            className={`${nameBoard} board`}
            key={`${nameBoard}-key`}
            >
                {
                    buttons.map((btn : ButtonCalculatorProps, index : number) => (
                        <ButtonCalculator 
                            label={btn.label}
                            key={`${btn.label}-${nameBoard}-key`}
                            id={`${btn.id}-id-${nameBoard}-${index}`}
                            classNames={btn.classNames}
                            isMono={btn.isMono}
                        />
                    ))
                }
        </div>
    );
}

export default BoardButton;