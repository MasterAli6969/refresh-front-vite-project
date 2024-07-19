import { FC } from "react";
import { useAppDispatch } from "../../../../../../../features/redux/hooks/reduxRootHooks";
import {
  setToggle,
  ToggleStateType,
} from "../../../../../../../features/redux/reducers/common-reducers/toggleRedusers";

import CloseIcon from "../../../../../../../assets/icons-svg-components/CloseIcon";
import CheckedWhiteIcon from "../../../../../../../assets/icons/CheckedWhiteIcon.svg";

import styles from "./screenshot_saved_modal_windows.module.scss";
import { RedaxStateProps } from "../../../../../../../commonTypes.interface";

interface ScreenshotSavedModalWindowsPropsType extends RedaxStateProps {}

const ScreenshotSavedModalWindows: FC<ScreenshotSavedModalWindowsPropsType> = ({
  redaxStateKey,
}) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(
      setToggle({
        key: redaxStateKey as keyof ToggleStateType,
        value: false,
      })
    );
  };

  return (
    <div className={styles.div}>
      <div>
        <div>
          <img src={CheckedWhiteIcon} />
          <p>Готово</p>
        </div>
        <div onClick={handleClose}>
          <CloseIcon />
        </div>
      </div>
      <p>Скришот сохранен на ваше устройство.</p>
      <button onClick={handleClose}>Перейти</button>
    </div>
  );
};

export default ScreenshotSavedModalWindows;
