import type { TypeBtn } from "../types/TypeBtn";
import type { BaseComponentProps } from "./BaseComponentPorps";

export interface CalBtnProps extends BaseComponentProps<HTMLButtonElement> {
    typeBtn : TypeBtn;
}