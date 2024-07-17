import { FC } from "react";
import { useAppDispatch } from "../../../features/redux/hooks/reduxRootHooks";
import {
  setToggle,
  ToggleStateType,
} from "../../../features/redux/reducers/common-reducers/toggleRedusers";
import CloseIcon from "../../../assets/icons-svg-components/CloseIcon";
import { CustomModalCloseHeadPropsType } from "./customModalCloseHead.interface";

import styles from "./custom_modal_close_head.module.scss";

const CustomModalCloseHead: FC<CustomModalCloseHeadPropsType> = ({
  redaxStateKey,
  text,
  specialText,
}) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(
      setToggle({ key: redaxStateKey as keyof ToggleStateType, value: false })
    );
  };

  return (
    <div className={styles.div}>
      <h3>
        {text}
        {specialText && <span> {specialText} </span>}
      </h3>
      <div onClick={handleClose}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default CustomModalCloseHead;
