import type React from "react";
import type { CalBtnProps } from "../interfaces/CalBtnProps";
import { Button } from "reactstrap";

const CalBtn : React.FC<CalBtnProps> = ({typeBtn, children, ...rest} : CalBtnProps) => {

    if (typeof children === "string" || typeof children === "number") {

        const classNameBtn : string[] = ["border-0"];

        if (typeBtn === "calcul" && typeof children === "number") {
            classNameBtn.push("calcul");
            if (children !== 0) {
                if (children % 2 === 0) {
                    classNameBtn.push("paire")
                } else {
                    classNameBtn.push("impaire")
                }
            }
        }

        switch(typeBtn) {
                case "calcul":
                case "zeros":    
                    classNameBtn.push("bg-warning", "text-dark");
                    break;
                case "operator":
                    classNameBtn.push("bg-dark")  
                    break;
                case "main":
                    classNameBtn.push("");
                    break;      
            }

        return (
            <Button id={`${children}-${typeBtn}-id`} key={`${children}-${typeBtn}-key`} className={classNameBtn.join(" ")} {...rest}>{children}</Button>
        );

    } else {
        throw new Error("children must to be string or number")
    }
};

export default CalBtn;