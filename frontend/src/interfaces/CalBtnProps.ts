import type { CalBtnType } from "../types/CalBtnType";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface CalBtnProps extends BaseComponentProps {
    label : string;
    type : CalBtnType;
    onClick : (value : string) => void
}