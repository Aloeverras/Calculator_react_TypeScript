import React, { type HTMLAttributes } from "react";
import type { LabelType } from "./LabelType";

export type CalculatorButtonProps<T> = React.ComponentProps<
    React.JSXElementConstructor<
            {label : LabelType<T>} & HTMLAttributes<HTMLButtonElement>
        >  
    >