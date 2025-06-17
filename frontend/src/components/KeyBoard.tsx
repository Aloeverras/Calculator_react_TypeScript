import type { KeyBoardProps } from "../props/KeyBoardProps";
import type { ButtonListType } from "../types/ButtonListType";
import type { KeyBoardType } from "../types/KeyBoardType";
import { Button } from "reactstrap";


const KeyBoard : KeyBoardType = (props : KeyBoardProps) => {

    let filtedButtons : ButtonListType = [];

    if (props.monoLetter) {
        filtedButtons = props.buttons.filter((btn : string) => btn.length <= 1);
    } else {
        filtedButtons = props.buttons;
    }


    return (
       <>
            {
                filtedButtons.map((btn : string, index : number) => (
                    <Button id={`id-${btn}-${props.nameList}-${index}`} key={`key-${btn}`}>{btn}</Button>
                ))
            }
       </> 
    );
}

export default KeyBoard;