import { FC } from "react";

export type leftSidebarDataType = {
  id: number;
  url: string;
  icon: FC;
  text: string;
};

export interface leftSidebarDataTypeProps {
  leftSidebarData: leftSidebarDataType[];
}
