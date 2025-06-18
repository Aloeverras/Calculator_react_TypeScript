import { useState } from "react";
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

    const [boardLabel, setBoardLabel] = useState<string>(nameBoard);     

    return (
        <div  id={`${idBoard}-id-board`} className={`${boardLabel} board`}>
            <h3>{boardLabel}</h3>
            <button onClick={
                    () => setBoardLabel(boardLabel === nameBoard ? "New board name ?" : nameBoard)
                }>
                To change board name
            </button>
            <div>
                {
                    buttons.map((btn : ButtonCalculatorProps, index : number) => (
                        <ButtonCalculator 
                            label={btn.label}
                            key={`${btn.label}-${boardLabel}-key`}
                            id={`${btn.id}-id-${boardLabel}-${index}`}
                            classNames={btn.classNames}
                            isMono={btn.isMono}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default BoardButton;