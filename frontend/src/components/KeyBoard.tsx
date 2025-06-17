import { Button } from "reactstrap";
import type { KeyBoardProps } from "../props/KeyBoardProps";
import type { ButtonListType } from "../types/ButtonListType";

const KeyBoard : KeyBoardProps = ({nameListButton = "", keyButtons = []} : ButtonListType) => {
    return (
        <>
            {
                keyButtons.map((btn : string, index : number) => (
                    <Button 
                    key={`${btn}-${nameListButton}-key-${index}`}
                    id={`${btn}-${nameListButton}-id-${index}`}
                    className="buttonListKeyBoard">    
                        {btn}
                    </Button>
                ))
            }
        </>
    );
};

export default KeyBoard;