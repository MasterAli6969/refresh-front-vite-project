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
          <CustomButton icon={OfflineIcon} color="dark" text="Смена закрыта" />
        </CustomCenterModalOpenWrapper>
      ) : (
        <>
          <CustomButton
            onClick={handleClickVisibleMenu}
            icon={OnlineIcon}
            color="dark"
            text="Смена открыта"
          />
          {isMenuVisible && (
            <CustomDynamicList
              listItem={[
                () => <CustomButton text="Закрыть смену" color="dark" />,
                () => <CustomButton text="Расходы кассы" color="dark" />,
                () => (
                  <CustomButton
                    text="Промежуточный отчет"
                    color="transparent"
                  />
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