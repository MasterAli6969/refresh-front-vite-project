import { FC } from "react";
import { useAppDispatch } from "../../../features/redux/hooks/reduxRootHooks";

import CloseIcon from "../../../assets/icons-svg-components/CloseIcon";

import { RedaxStateProps } from "../../../commonTypes.interface";
import {
  resetModals,
  setToggleDynamic,
} from "../../../features/redux/reducers/common-reducers/dynamic-component-reducers/toggleDynamicReduser";

import styles from "./custom_modal_close_head.module.scss";

export interface CustomModalCloseHeadPropsType extends RedaxStateProps {
  text: string;
  specialText?: string;
}

const CustomModalCloseHead: FC<CustomModalCloseHeadPropsType> = ({
  redaxStateKey,
  text,
  specialText,
}) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
        value: false,
      }),
      resetModals()
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
