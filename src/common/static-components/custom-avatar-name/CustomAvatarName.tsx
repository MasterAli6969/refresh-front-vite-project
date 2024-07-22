import { FC } from "react";

import styles from "./custom_avatar_name.module.scss";

export interface CustomAvatarNamePropType {
  name: string;
}

const CustomAvatarName: FC<CustomAvatarNamePropType> = ({ name }) => {
  return (
    <div className={styles.div}>
      <h2>{name}</h2>
    </div>
  );
};

export default CustomAvatarName;
