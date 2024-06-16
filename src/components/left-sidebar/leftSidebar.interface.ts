import { FC } from "react";
import { PropsIcon } from "../../assets/icons-svg-components/props.interface";
import { ListLinkType } from "../../commonTypes.interface";

export interface leftSidebarDataType {
  id: number;
  url: string;
  icon: FC<PropsIcon>;
  text: string;
}

export interface LeftDropListStaticDataType extends ListLinkType {}

export interface LeftDropListDropMenuDataType {
  id: number;
  title: string;
  customListDropItem?: ListLinkType[];
  url?: string;
}

export interface LeftDropListDataProps {
  leftDropListStaticData?: LeftDropListStaticDataType[];
  leftDropListDropData?: LeftDropListDropMenuDataType[];
}
