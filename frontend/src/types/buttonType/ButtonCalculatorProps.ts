import type { HTMLAttributes, JSXElementConstructor } from "react";
import type React from "react";

export type ButtonCalculatorProps = React.ComponentProps<
    JSXElementConstructor<
        {label : string | number} & HTMLAttributes<HTMLButtonElement>
    >
>;