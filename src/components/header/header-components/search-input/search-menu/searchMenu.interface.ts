import { ListLinkType } from "../../../../../commonTypes.interface";

export interface SearchMenuDataType {
  id: number;
  name: string;
  paymentAmount: string;
  timeLeft: string;
  hoverSubMenuItem: ListLinkType[];
}

export interface SearchMenuPropsType {
  inputState: string;
  Focused: boolean;
}
