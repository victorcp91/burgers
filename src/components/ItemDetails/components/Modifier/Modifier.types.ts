import { IModifier, IModifierChoice } from "@/types/menu";

export interface IModifierProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  modifier: IModifier;
  addModifier: (modifierId: number, modifierItem: IModifierChoice) => void;
  removeModifier: (modifierId: number, modifierItemId: number) => void;
}
