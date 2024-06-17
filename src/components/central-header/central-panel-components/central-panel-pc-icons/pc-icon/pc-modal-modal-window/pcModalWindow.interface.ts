import { ListLinkType } from "../../../../../../../commonTypes.interface";

export interface DropDataObjectType {
  client: string;
  timeLeft: string;
  dropDataItem: ListLinkType[];
}

// Тип для pcIconModalWindowData
export interface PcIconModalWindowDataType {
  dropData?: DropDataObjectType;
  modalListItem: ListLinkType[];
}

export interface PcIconModalWindowPropsData {
  pcIconModalWindowData: PcIconModalWindowDataType;
  pcStatus: string;
}
