import type React from "react";
import type { CalculatorButtonProps } from "./CalculatorButtonProps";

export type CalculatorButtonType<T> = React.FC<CalculatorButtonProps<T>>;