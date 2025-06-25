import React, { type HTMLAttributes } from "react";

export type CalculatorButtonProps<T> = React.ComponentProps<
    React.JSXElementConstructor<T & HTMLAttributes<HTMLButtonElement>
        >
    >