export type HeaderDropDataTypes = {
  id: number;
  url: string;
  icon: string;
  text: string;
};

export type UserPanelDataTypes = {
  id: number;
  avatar: string;
  name: string;
  position: string;
  dropData: HeaderDropDataTypes[];
};

export interface UserPanelDataPropsTypes {
  userPanelData: UserPanelDataTypes;
}
