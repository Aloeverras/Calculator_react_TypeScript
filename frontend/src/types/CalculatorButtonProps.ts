import React, { type HTMLAttributes } from "react";

export type CalculatorButtonProps<T> = React.ComponentProps<
    React.JSXElementConstructor<{label : T} & HTMLAttributes<HTMLButtonElement>
        >
    >