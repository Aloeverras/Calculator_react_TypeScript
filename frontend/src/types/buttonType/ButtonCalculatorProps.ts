import type { JSXElementConstructor } from "react";
import type React from "react";
import type { NumberButtonCalculator } from "./NumberButtonCalculator";
import type { OperatorButtonCalculator } from "./OperatorButtonCalculator";
import type { MainButtonCalculator } from "./MainButtonCalculator";

export type ButtonCalculatorProps = React.ComponentProps<JSXElementConstructor<{id : string, label : NumberButtonCalculator | OperatorButtonCalculator | MainButtonCalculator}>>; 