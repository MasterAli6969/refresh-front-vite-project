import { FC } from "react";
//ИКОНКИ
import UserIconLight from "../../../../../../../../../../../assets/icons/UserIconLight.svg";
import ClockBudLight from "../../../../../../../../../../../assets/icons/ClockBudLight.svg";
import ArrowChekRight from "../../../../../../../../../../../assets/icons-svg-components/ArrowChekRight";
//МОДУЛИ ДЛЯ РАБОТЫ
import CustomCenterModalOpenWrapper from "../../../../../../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
//МОДУЛИ ДЛЯ РЕНДЕРА
import ChangeLocationModalWindow from "./user-data-madal-windows/change-location-modal-window/ChangeLocationModalWindow";
import AddTimeModalwindow from "./user-data-madal-windows/add-time-modal-window/AddTimeModalwindow";
import EndSessionModalWindow from "./user-data-madal-windows/end-session-modal-window/EndSessionModalWindow";
import PenaltyModalWindow from "./user-data-madal-windows/penalty-modal-window/PenaltyModalWindow";
import ReplenishmentModalWindow from "./user-data-madal-windows/replenishment-modal-window/ReplenishmentModalWindow";
import SendMessageModalWindow from "./user-data-madal-windows/send-message-modal-window/SendMessageModalWindow";
//СТИЛИ
import styles from "./user_data.module.scss";
import CustomContexMenuOpenClickCloseWrapper from "../../../../../../../../../../../common/smart-component/custom-contex-menu-open-click-close-wrapper/CustomContexMenuOpenClickCloseWrapper";

interface UserDataPropsType {
  comp_id: number;
}

const UserData: FC<UserDataPropsType> = ({ comp_id }) => {
  const userName = "GG.August";

  return (
    <CustomContexMenuOpenClickCloseWrapper
      isListItemFlex={false}
      dropPosition="right"
      dropMenuItems={[
        () => (
          <CustomCenterModalOpenWrapper
            redaxStateKey={`ReplenishmentModalWindow${comp_id}`}
            openComponents={() => (
              <ReplenishmentModalWindow
                redaxStateKey={`ReplenishmentModalWindow${comp_id}`}
                title="Пополнение"
                specialText={userName}
              />
            )}
          >
            <h3>Пополнение</h3>
          </CustomCenterModalOpenWrapper>
        ),
        () => (
          <CustomCenterModalOpenWrapper
            redaxStateKey={`AddTimeModalwindow${comp_id}`}
            openComponents={() => (
              <AddTimeModalwindow
                redaxStateKey={`AddTimeModalwindow${comp_id}`}
                title="Добавить время"
              />
            )}
          >
            <h3>Добавить время</h3>
          </CustomCenterModalOpenWrapper>
        ),
        () => (
          <CustomCenterModalOpenWrapper
            redaxStateKey={`PenaltyModalWindow${comp_id}`}
            openComponents={() => (
              <PenaltyModalWindow
                redaxStateKey={`PenaltyModalWindow${comp_id}`}
                title="Штраф"
                specialText={userName}
              />
            )}
          >
            <h3>Штраф</h3>
          </CustomCenterModalOpenWrapper>
        ),
        () => (
          <CustomCenterModalOpenWrapper
            redaxStateKey={`SendMessageModalWindow${comp_id}`}
            openComponents={() => (
              <SendMessageModalWindow
                redaxStateKey={`SendMessageModalWindow${comp_id}`}
                title="Отправить сообщение"
                specialText={userName}
              />
            )}
          >
            <h3>Отправить сообщение</h3>
          </CustomCenterModalOpenWrapper>
        ),
        () => (
          <CustomCenterModalOpenWrapper
            redaxStateKey={`ChangeLocationModalWindow${comp_id}`}
            openComponents={() => (
              <ChangeLocationModalWindow
                redaxStateKey={`ChangeLocationModalWindow${comp_id}`}
                comp_id={comp_id}
                title="Сменить место"
                specialText={userName}
              />
            )}
          >
            <h3>Сменить место</h3>
          </CustomCenterModalOpenWrapper>
        ),
        () => (
          <CustomCenterModalOpenWrapper
            redaxStateKey={`EndSessionModalWindow${comp_id}`}
            openComponents={() => (
              <EndSessionModalWindow
                redaxStateKey={`EndSessionModalWindow${comp_id}`}
                title="Завершить сессию"
                specialText={userName}
              />
            )}
          >
            <h3>Завершить сессию</h3>
          </CustomCenterModalOpenWrapper>
        ),
        () => <h3>Профиль клиента</h3>,

        () => <h3>История транзакций</h3>,
      ]}
    >
      <div className={styles.div}>
        <div className={styles.subdiv}>
          <div>
            <img src={UserIconLight} />
            <h5>GG.August</h5>
          </div>
          <div>
            <img src={ClockBudLight} />
            <h5>2 часа 11 минут</h5>
          </div>
        </div>
        <ArrowChekRight color="#fff" />
      </div>
    </CustomContexMenuOpenClickCloseWrapper>
  );
};

export default UserData;
