import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import { useAppSelector } from "../../../../features/redux/hooks/reduxRootHooks";
import classNames from "classnames";
//ИКОНКИ
import OfflineIcon from "../../../../assets/icons/OfflineIcon.svg";
import OnlineIcon from "../../../../assets/icons/OnlineIcon.svg";
import CustomButton from "../../../../common/static-components/custom-button/CustomButton";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomCenterModalOpenWrapper from "../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import CustomContexMenuOpenUniversalWrapper from "../../../../common/smart-component/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenUniversalWrapper";
import OpenShiftModalWindow from "./shift-panel-modal-windows/OpenShiftModalWindow";
import CloseShiftModalWindow from "./shift-panel-modal-windows/close-shift-modal-window/CloseShiftModalWindow";
import ExpensesCashModalWindow from "./shift-panel-modal-windows/ExpensesCashModalWindow";

//СТИЛИ
import styles from "./shift_panel.module.scss";

const ShiftPanel: FC = () => {
  const isShiftStatus = useAppSelector(
    (state) => state.toggleDynamic.modalStates["isShiftStatus"]
  );

  return (
    <div className={styles.div}>
      {!isShiftStatus ? (
        <div className={styles.subdiv_open_shift_button}>
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
              <img src={OfflineIcon} />
              <p>Смена закрыта</p>
            </CustomButton>
          </CustomCenterModalOpenWrapper>
        </div>
      ) : (
        <CustomContexMenuOpenUniversalWrapper
          dropPosition="bottom"
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
                <CustomButton color="dark">
                  <p>Закрыть смену</p>
                </CustomButton>
              </CustomCenterModalOpenWrapper>
            ),
            () => (
              <CustomCenterModalOpenWrapper
                redaxStateKey="ExpensesCashModalWindow"
                openComponents={() => (
                  <ExpensesCashModalWindow redaxStateKey="ExpensesCashModalWindow" />
                )}
              >
                <CustomButton color="dark">
                  <p>Расходы кассы </p>
                </CustomButton>
              </CustomCenterModalOpenWrapper>
            ),
            () => (
              <CustomButton color="transparent">
                <p>Промежуточный отчет</p>
              </CustomButton>
            ),
          ]}
        >
          <CustomButton color="dark">
            <img src={OnlineIcon} />
            <p>Смена открыта</p>
          </CustomButton>
          <div className={classNames(styles.close_shift_drop_menu)}></div>
        </CustomContexMenuOpenUniversalWrapper>
      )}
    </div>
  );
};

export default ShiftPanel;
