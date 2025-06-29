import type React from "react";
import type { CalBtnProps } from "../interfaces/CalBtnProps";
import { Button } from "reactstrap";

const CalBtn : React.FC<CalBtnProps> = ({typeBtn, children} : CalBtnProps) => {
    if (typeof children === "string" || typeof children === "number") {
        const classNameBtn : string[] = [];

        if (typeBtn === "calcul" && typeof children === "number") {
            classNameBtn.push("calcul");
            if (children !== 0) {
                if (children % 2 === 0) {
                    classNameBtn.push("")
                }
            }
        } else {
            switch(typeBtn) {

            }
        };

        return (
            <Button className={classNameBtn.join(" ")}>{children}</Button>
        );

    } else {
        throw new Error("children must to be string or number")
    }
};

export default CalBtn;