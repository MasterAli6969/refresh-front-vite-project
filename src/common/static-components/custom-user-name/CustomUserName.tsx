import { FC } from "react";

import CustomAvatarName from "../custom-avatar-name/CustomAvatarName";

import { CustomUserNamePropsType } from "./customUserName.interface";

import styles from "./custom_user_name.module.scss";

const CustomUserName: FC<CustomUserNamePropsType> = ({
  initials,
  name,
  position,
}) => {
  return (
    <div className={styles.div}>
      <div>
        <CustomAvatarName name={initials} />
      </div>
      <div>
        <h3>{name}</h3>
        {position && <h4>{position}</h4>}
      </div>
    </div>
  );
};

export default CustomUserName;