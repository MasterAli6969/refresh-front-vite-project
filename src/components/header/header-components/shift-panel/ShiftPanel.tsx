import { FC, useState } from "react";
import { useAppSelector } from "../../../../features/redux/hooks/reduxRootHooks";
//ИКОНКИ
import OfflineIcon from "../../../../assets/icons/OfflineIcon.svg";
import OnlineIcon from "../../../../assets/icons/OnlineIcon.svg";
import CustomButton from "../../../../common/static-components/custom-button/CustomButton";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomCenterModalOpenWrapper from "../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import CustomDynamicList from "../../../../common/smart-component/custom-dynamic-list/CustomDynamicList";
import OpenShiftModalWindow from "./shift-panel-modal-windows/open-shift-modal-window/OpenShiftModalWindow";
//СТИЛИ

const ShiftPanel: FC = () => {
  const isShiftStatus = useAppSelector(
    (state) => state.toggleDynamic.modalStates["isShiftStatus"]
  );

  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const handleClickVisibleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <div>
      {!isShiftStatus ? (
        <CustomCenterModalOpenWrapper
          redaxStateKey="userPanelOpenShiftModalWindow"
          openComponents={() => (
            <OpenShiftModalWindow
              redaxStateKey="userPanelOpenShiftModalWindow"
              redaxShiftState="isShiftStatus"
              shiftType={isShiftStatus}
              title={!isShiftStatus ? "Открытие смены" : "Закрытие смены "}
              rightButton={!isShiftStatus ? "Открыть смену" : "Закрыть смену"}
            />
          )}
        >
          <CustomButton color="dark">
            <img src={OfflineIcon} />
            <p>Смена закрыта</p>
          </CustomButton>
        </CustomCenterModalOpenWrapper>
      ) : (
        <>
          <CustomButton onClick={handleClickVisibleMenu} color="dark">
            <img src={OnlineIcon} />
            <p>Смена открыта</p>
          </CustomButton>
          {isMenuVisible && (
            <CustomDynamicList
              listItem={[
                () => (
                  <CustomButton color="dark">
                    <p>Закрыть смену</p>
                  </CustomButton>
                ),
                () => (
                  <CustomButton color="dark">
                    <p>Расходы кассы</p>
                  </CustomButton>
                ),
                () => (
                  <CustomButton color="transparent">
                    <p>Промежуточный отчет</p>
                  </CustomButton>
                ),
              ]}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ShiftPanel;
