export interface CustomSelectDataType {
  id: number;
  selectItem: string;
}

export interface CustomSelectPropsType {
  title: string;
  selectTitle: string;
  customSelectData: CustomSelectDataType[];
}
