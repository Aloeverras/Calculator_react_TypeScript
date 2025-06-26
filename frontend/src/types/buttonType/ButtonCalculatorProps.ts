import type { JSXElementConstructor } from "react";
import type React from "react";

export type ButtonCalculatorProps<T> = React.ComponentProps<JSXElementConstructor<{ label : T}>>; 