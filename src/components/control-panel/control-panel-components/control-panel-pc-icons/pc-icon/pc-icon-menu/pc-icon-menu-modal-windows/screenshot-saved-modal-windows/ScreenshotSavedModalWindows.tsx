import { FC } from "react";
import { useAppDispatch } from "../../../../../../../../features/redux/hooks/reduxRootHooks";

import CloseIcon from "../../../../../../../../assets/icons-svg-components/CloseIcon";
import CheckedWhiteIcon from "../../../../../../../../assets/icons/CheckedWhiteIcon.svg";

import styles from "./screenshot_saved_modal_windows.module.scss";
import { RedaxStateProps } from "../../../../../../../../commonTypes.interface";
import { setToggleDynamic } from "../../../../../../../../features/redux/reducers/common-reducers/dynamic-component-reducers/toggleDynamicReduser";

interface ScreenshotSavedModalWindowsPropsType extends RedaxStateProps {}

const ScreenshotSavedModalWindows: FC<ScreenshotSavedModalWindowsPropsType> = ({
  redaxStateKey,
}) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
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
