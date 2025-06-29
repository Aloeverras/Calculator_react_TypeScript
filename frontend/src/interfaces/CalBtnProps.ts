import type { HTMLAttributes } from "react";

export interface CalBtnProps extends HTMLAttributes<HTMLButtonElement> {
    typeBtn : "calcul" | "operator" | "zeros" | "main"
}