import KeyBoard from "./KeyBoard";
import type { NumberKeyBoardType } from "../types/NumberKeyBoardType";

const NumberKeyBoard : NumberKeyBoardType = () => {
    return (
        <>
            <KeyBoard 
                monoLetter={true} 
                nameList="numberListButton"
                buttons={
                    Array.from({ length : 10 }, (_, i) => i.toString())
                }/>
        </>
        
    );
};

export default NumberKeyBoard;