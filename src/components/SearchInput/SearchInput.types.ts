import { InputHTMLAttributes } from "react";

export interface ISearchInput extends InputHTMLAttributes<HTMLInputElement> {
  change: (value: string) => void;
  onChangeTyping: (status: boolean) => void;
}
