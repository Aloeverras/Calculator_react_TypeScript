import type { PropsWithChildren } from "react";
import type { CalBtnType } from "../types/CalBtnType";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface CalBtnProps extends BaseComponentProps<PropsWithChildren<HTMLButtonElement>> {
    label : string,
    type : CalBtnType
}