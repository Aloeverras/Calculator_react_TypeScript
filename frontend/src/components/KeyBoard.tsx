import type { KeyBoardProps } from "../props/KeyBoardProps";
import type { KeyBoardType } from "../types/KeyBoardType";
import { Button } from "reactstrap";


const KeyBoard : KeyBoardType = (props : KeyBoardProps) => {

    let filtedButtons : string[] = [];

    if (props.monoLetter) {
        filtedButtons = props.buttons.filter((btn : string) => btn.length <= 1);
    } else {
        filtedButtons = props.buttons;
    }


    return (
       <div>
            {
                filtedButtons.map((btn : string, index : number) => (
                    <Button id={`id-${btn}-${index}`} key={`key-${btn}`}>{btn}</Button>
                ))
            }
       </div> 
    );
}

export default KeyBoard;