import type { HTMLAttributes } from "react";

export interface BaseComponentProps<T extends HTMLElement> extends HTMLAttributes<T> {
    "data-testid"?: string
}