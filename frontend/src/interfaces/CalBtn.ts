import type { ButtonHTMLAttributes } from "react";
import type { LabelType } from "../types/LabelType";

export interface CalBtn<T> extends ButtonHTMLAttributes<T> {
    id? : string;
    classNames? : string;
    label : LabelType<T> ;
};