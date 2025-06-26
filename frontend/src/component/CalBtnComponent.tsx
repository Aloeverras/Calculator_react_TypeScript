import type { CalBtnProps } from "../types/CalBtnProps";
import type { CalBtnType } from "../types/CalBtnType";
import {Button} from "reactstrap"

const CalBtnComponent : CalBtnType<string | number> = ({label} : CalBtnProps<string | number>) => {
    return (
        <Button>{label}</Button>
    );
};

export default CalBtnComponent;