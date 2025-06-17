import type { FinalyKeyBoardType } from "../types/FinalyKeyBoardType";
import KeyBoard from "./KeyBoard";

const FinalyKeyBoard : FinalyKeyBoardType = () => {
    return (
        <>
            <KeyBoard
                monoLetter={false}
                nameList="finaly"
                buttons={
                    ["AC", "C"]
                }
            />
        </>
    );
}

export default FinalyKeyBoard;