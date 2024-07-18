import { ListLinkType } from "../../../../../commonTypes.interface";

export interface DropDataObjectType {
  client: string;
  timeLeft: string;
  dropDataItem: ListLinkType[];
}

// Тип для pcIconModalWindowData
export interface PcIconMenuDataType {
  dropData?: DropDataObjectType;
  modalListItem: ListLinkType[];
}

export interface PcIconMenuPropsData {
  pcIconModalWindowData: PcIconMenuDataType;
  pcStatus: string;
}
