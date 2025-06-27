import type { CalBtnType } from "../types/CalBtnType";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface CalBtnProps extends BaseComponentProps<HTMLButtonElement> {
    label : string,
    type : CalBtnType,
}