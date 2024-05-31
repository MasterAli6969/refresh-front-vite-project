import { FC } from "react";
import { propsIcon } from "../../assets/icons-svg-components/props.interface";

export interface leftSidebarDataType {
  id: number;
  url: string;
  icon: FC<propsIcon>;
  text: string;
}
