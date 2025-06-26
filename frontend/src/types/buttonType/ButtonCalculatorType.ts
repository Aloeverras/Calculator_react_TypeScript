import type React from "react";
import type { ButtonCalculatorProps } from "./ButtonCalculatorProps";

export type ButtonCalculatorType<T> = React.FC<ButtonCalculatorProps<T>>;