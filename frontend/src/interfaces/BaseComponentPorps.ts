import type { HTMLAttributes } from "react";

export interface BaseComponentProps<T extends HTMLElement> extends HTMLAttributes<T> {
    htmlInitial? : T;
    "data-component"? : string;
}