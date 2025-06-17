import type { OperationKeyBoardType } from "../types/OperationKeyBoardType";
import KeyBoard from "./KeyBoard";

const OperationKeyBoard : OperationKeyBoardType = () => {
    return (
        <>
            <KeyBoard monoLetter={true} nameList="operation" buttons={
                [
                    "/",
                    "-",
                    "+",
                    "*",
                    "."
                ]
            }></KeyBoard>
        </>
    );
}

export default OperationKeyBoard;