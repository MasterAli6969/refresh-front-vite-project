import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomDynamicList from "../../../../../../common/smart-component/custom-dynamic-list/CustomDynamicList";

import CustomCenterModalOpenWrapper from "../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import ReplenishmentBalanceModalWindows from "../../../../../../common/special-componet/replenishment-balance-modal-windows/ReplenishmentBalanceModalWindows";

const WebAdministratorContextMenu: FC = () => {
  return (
    <CustomDynamicList
      listItem={[
        () => (
          <p>
            <CustomCenterModalOpenWrapper
              redaxStateKey={"CustomCenterModalOpenWrapper"}
              openComponents={() => (
                <ReplenishmentBalanceModalWindows
                  redaxStateKey={"CustomCenterModalOpenWrapper"}
                />
              )}
            >
              Общие настройки
            </CustomCenterModalOpenWrapper>
          </p>
        ),
        () => <p>Конфигурация отчетов</p>,
        () => <p>Конфигурация бронирования</p>,
        () => <p>Склад</p>,
        () => <p>Конфигурация кассы</p>,
        () => <p>Сотрудники и роли</p>,
        () => <p>Продукты и подписки</p>,
      ]}
    />
  );
};

export default WebAdministratorContextMenu;
