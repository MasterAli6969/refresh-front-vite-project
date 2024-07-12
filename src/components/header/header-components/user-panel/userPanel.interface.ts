export interface DropListItemTypes {
  id: number;
  url: string;
  icon: string;
  text: string;
}

export interface ShiftDataTypes {
  generalSales: string;
  cash: string;
  bankCard: string;
  refunds: string;
}

export interface DropDataTypes {
  shiftData: ShiftDataTypes;
  dropListItem: DropListItemTypes[];
}

export interface UserPanelDataTypes {
  id: number;
  avatar: string;
  name: string;
  position: string;
  dropData: DropDataTypes;
}

export interface UserPanelDataPropsTypes {
  userPanelData: UserPanelDataTypes;
}
