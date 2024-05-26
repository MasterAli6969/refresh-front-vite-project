import { FC } from "react";

export type leftSidebarDataType = {
  id: string;
  url: string;
  icon: FC;
  text: string;
};

export interface leftSidebarDataTypeProps {
  leftSidebarData: leftSidebarDataType[];
}
