import { FC } from "react";

import { CustomAvatarNamePropType } from "./customAvatarName.interface";

import styles from "./custom_avatar_name.module.scss";

const CustomAvatarName: FC<CustomAvatarNamePropType> = ({ name }) => {
  return (
    <div className={styles.div}>
      <h2>{name}</h2>
    </div>
  );
};

export default CustomAvatarName;
