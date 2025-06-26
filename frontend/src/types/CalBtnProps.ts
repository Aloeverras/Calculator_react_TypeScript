import type { ComponentProps, JSXElementConstructor } from "react";
import type { CalBtn } from "../interfaces/CalBtn";

export type CalBtnProps<T> = ComponentProps<JSXElementConstructor<CalBtn<T>>>;