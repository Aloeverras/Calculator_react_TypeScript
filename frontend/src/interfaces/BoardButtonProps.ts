import type { BaseComponentProps } from "./BaseComponentProps";

export interface BoardButtonProps extends BaseComponentProps<HTMLDivElement> {
    labelBoard : string;
    btnString : string[]
}