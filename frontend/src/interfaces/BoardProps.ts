import type { TypeBtn } from "../types/TypeBtn";
import type { BaseComponentProps } from "./BaseComponentPorps";

export interface BoardProps extends BaseComponentProps<HTMLDivElement> {
    boardType : TypeBtn;
    buttonsCal : string[];
}