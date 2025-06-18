import type React from "react";
import {Button} from "reactstrap";

export type ButtonCalculatorProps = {
    label : string,
    id : string
    classNames? : string,
    isMono? : boolean
} 
&
React.ComponentPropsWithoutRef<typeof Button>