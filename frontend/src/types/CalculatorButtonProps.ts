import React from "react";
import type { JSXElementConstructor } from "react";

export type CalculatorButtonProps = React.ComponentProps<
    JSXElementConstructor<
        {
            label : string | number,
            id : string
        }
    >
>;