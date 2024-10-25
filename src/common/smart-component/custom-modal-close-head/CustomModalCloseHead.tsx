import { FC } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../features/redux/hooks/reduxRootHooks";

import CloseIcon from "../../../assets/icons-svg-components/CloseIcon";

import { RedaxStateProps } from "../../../commonTypes.interface";
import {
  resetModals,
  setToggleDynamic,
} from "../../../features/redux/reducers/common-reducers/toggleDynamicReduser";

import styles from "./custom_modal_close_head.module.scss";
import { pcRoomsSaveColor } from "../../../features/redux/reducers/special-reducers/pc-rooms-reducers/pcRoomsSaveColorReducer";

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

  //ЭТОТ ВЫЗОВ У НАС ИДЁТ ИСКЛЮЧИТЕЛЬНО НА ЦВЕТ ВЫБРАННОГО НАЗВАНИЯ КОМНАТ ПК
  const pcRoomColor = useAppSelector(
    (state) => state.pcRoomsSaveColor.currentColor
  );

  const handleClose = () => {
    // СБРОС СОСТОЯНИЯ ОТКРЫТИЯ ОКНА
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
        {text}{" "}
        {specialText && (
          <span style={{ color: `${pcRoomColor != "#fff" && pcRoomColor}` }}>
            {specialText}
          </span>
        )}
      </h3>
      <div onClick={handleClose}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default CustomModalCloseHead;
