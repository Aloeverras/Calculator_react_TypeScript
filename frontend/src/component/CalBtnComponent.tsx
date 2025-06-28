import type React from "react";
import type { CalBtnProps } from "../interfaces/CalBtnProps";
import {Button} from "reactstrap";
import type { JSXElementConstructor } from "react";

const CalBtn : React.FC<CalBtnProps> = ({label, type, ...rest} : React.ComponentProps<JSXElementConstructor<CalBtnProps>>) => {
    
    const getColor = (type : CalBtnProps["type"]) : string => {
        switch(type) {
            case "digit":
            case "decimal":
                return "secondary";
            case "operator":
                return "warning";      
            case "eqal":
                return "success";
            case "clear":
                return "danger";
            default:
                return "primary"     
        }
    };

    return (
        <Button color={getColor(type)} {...rest}>
            {label}
        </Button>
    );
}

export default CalBtn;