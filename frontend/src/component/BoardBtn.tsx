import type React from "react";
import type { BoardProps } from "../interfaces/BoardProps";
import CalBtn from "./CalBtn";

const BoardBtn : React.FC<BoardProps> = ({buttonsCal, boardType} : BoardProps) => {
    return (
        <div>
            {
                buttonsCal.map((btn : string) => (
                    <CalBtn children={btn} typeBtn={boardType}/>
                ))
            }
        </div>
    );
};

export default BoardBtn;