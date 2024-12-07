import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import { useAppSelector } from "../../../../features/redux/hooks/reduxRootHooks";
import classNames from "classnames";
//ИКОНКИ
import OfflineIcon from "../../../../assets/icons/OfflineIcon.svg";
import OnlineIcon from "../../../../assets/icons/OnlineIcon.svg";
import CustomButton from "../../../../common/static-components/buttons/custom-button/CustomButton";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomCenterModalOpenWrapper from "../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import OpenShiftModalWindow from "./shift-panel-modal-windows/OpenShiftModalWindow";
import CloseShiftModalWindow from "./shift-panel-modal-windows/close-shift-modal-window/CloseShiftModalWindow";
import ExpensesCashModalWindow from "./shift-panel-modal-windows/ExpensesCashModalWindow";
//СТИЛИ
import styles from "./shift_panel.module.scss";
import CustomContexMenuOpenClickCloseWrapper from "../../../../common/smart-component/custom-contex-menu-open-click-close-wrapper/CustomContexMenuOpenClickCloseWrapper";

const ShiftPanel: FC = () => {
  const isShiftStatus = useAppSelector(
    (state) => state.toggleDynamic.modalStates["isShiftStatus"]
  );

  return (
    <div className={styles.div}>
      {!isShiftStatus ? (
        <CustomCenterModalOpenWrapper
          redaxStateKey="userPanelOpenShiftModalWindow"
          openComponents={() => (
            <OpenShiftModalWindow
              redaxStateKey="userPanelOpenShiftModalWindow"
              redaxShiftState="isShiftStatus"
            />
          )}
        >
          <CustomButton color="dark">
            <img className={styles.shift_icon} src={OfflineIcon} />
            <h4>Смена закрыта</h4>
          </CustomButton>
        </CustomCenterModalOpenWrapper>
      ) : (
        <CustomContexMenuOpenClickCloseWrapper
          dropPosition="bottom"
          isPaddingAndHover={true}
          dropMenuItems={[
            () => (
              <CustomCenterModalOpenWrapper
                redaxStateKey="userPanelCloseShiftModalWindow"
                openComponents={() => (
                  <CloseShiftModalWindow
                    redaxStateKey="userPanelCloseShiftModalWindow"
                    redaxShiftState="isShiftStatus"
                  />
                )}
              >
                <div
                  className={classNames(
                    styles.context_shift_menu_button,
                    styles.context_shift_menu_button_red
                  )}
                >
                  <h4>Закрыть смену</h4>
                </div>
              </CustomCenterModalOpenWrapper>
            ),
            () => (
              <CustomCenterModalOpenWrapper
                redaxStateKey="ExpensesCashModalWindow"
                openComponents={() => (
                  <ExpensesCashModalWindow redaxStateKey="ExpensesCashModalWindow" />
                )}
              >
                <div className={styles.context_shift_menu_button}>
                  <h4>Расходы кассы </h4>
                </div>
              </CustomCenterModalOpenWrapper>
            ),
            () => (
              <div className={styles.context_shift_menu_button}>
                <h4>Промежуточный отчет</h4>
              </div>
            ),
          ]}
        >
          <CustomButton color="dark">
            <img className={styles.shift_icon} src={OnlineIcon} />
            <h4>Смена открыта</h4>
          </CustomButton>
        </CustomContexMenuOpenClickCloseWrapper>
      )}
    </div>
  );
};

export default ShiftPanel;
