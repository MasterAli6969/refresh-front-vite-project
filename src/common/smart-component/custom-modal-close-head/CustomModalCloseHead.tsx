import { FC } from "react";
//ИКОНКИ
import CloseIcon from "../../../assets/icons-svg-components/CloseIcon";
//МОДУЛИ ДЛЯ РАБОТЫ
import { RedaxStateProps } from "../../../commonTypes.interface";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../features/redux/hooks/reduxRootHooks";
import {
  resetModals,
  setToggleDynamic,
} from "../../../features/redux/reducers/common-reducers/toggleDynamicReduser";
import { pcRoomsSaveColor } from "../../../features/redux/reducers/special-reducers/pc-rooms-reducers/pcRoomsSaveColorReducer";
//СТИЛИ
import styles from "./custom_modal_close_head.module.scss";
import useHover from "../../../features/custom-hooks/common-hooks/useHover";

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

  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

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
        {specialText && <span style={{ color: `#32ADE6` }}>{specialText}</span>}
      </h3>
      <div
        onClick={handleClose}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CloseIcon color={isHovered ? "#fff" : "#939393"} />
      </div>
    </div>
  );
};

export default CustomModalCloseHead;
