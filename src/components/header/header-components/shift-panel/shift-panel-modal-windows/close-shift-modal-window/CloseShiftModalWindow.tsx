import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import { RedaxStateProps } from "../../../../../../commonTypes.interface";
import { useAppDispatch } from "../../../../../../features/redux/hooks/reduxRootHooks";
import { setToggleDynamic } from "../../../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CutomModalWindowUniversal from "../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomDualButtonYesNo from "../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
//СТИЛИ
import styles from "./close_shift_modal_window.module.scss";

export interface CloseShiftModalWindowPropsType extends RedaxStateProps {
  redaxShiftState: string;
}

const CloseShiftModalWindow: FC<CloseShiftModalWindowPropsType> = ({
  redaxStateKey,
  redaxShiftState,
}) => {
  const dispatch = useAppDispatch();

  const handleClickOpenisShiftStatus = () => {
    dispatch(
      setToggleDynamic({
        id: redaxShiftState,
        value: false,
      })
    );
    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
        value: false,
      })
    );
  };

  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title={"Закрытие смены"}
    >
      <ul className={styles.ul}>
        <li>
          <h4>Общая выручка</h4>
          <h4>₽ 500</h4>
        </li>
        <li>
          <p>Чистая прибыль</p>
          <p>₽ 500</p>
        </li>
        <li>
          <p>Наличные</p>
          <p>₽ 500</p>
        </li>
        <li>
          <p>Банковская карта</p>
          <p>₽ 500</p>
        </li>
        <li>
          <p>Возвраты</p>
          <p>₽ 500</p>
        </li>
      </ul>
      <CustomDualButtonYesNo
        redaxStateKey={redaxShiftState}
        buttonRightText="Закрытие смены и печать итогов"
        onClickRightButton={handleClickOpenisShiftStatus}
      />
    </CutomModalWindowUniversal>
  );
};

export default CloseShiftModalWindow;
