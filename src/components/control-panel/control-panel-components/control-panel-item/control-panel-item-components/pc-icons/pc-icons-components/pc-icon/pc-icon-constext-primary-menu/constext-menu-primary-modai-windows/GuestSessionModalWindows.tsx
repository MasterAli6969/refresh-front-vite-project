import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
import { CutomModalWindowUniversalDefaultPropsType } from "../../../../../../../../../../commonTypes.interface";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CutomModalWindowUniversal from "../../../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";

export interface GuestSessionModalWindowsPropsType
  extends CutomModalWindowUniversalDefaultPropsType {}

const GuestSessionModalWindows: FC<GuestSessionModalWindowsPropsType> = ({
  redaxStateKey,
  title,
}) => {
  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title={title}
    ></CutomModalWindowUniversal>
  );
};

export default GuestSessionModalWindows;
