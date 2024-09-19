import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomDynamicList from "../../../../../../common/smart-component/custom-dynamic-list/CustomDynamicList";

const ClientContextMenu: FC = () => {
  return (
    <CustomDynamicList
      listItem={[
        () => <p>Конфигурация клиента</p>,
        () => <p>Дизайн</p>,
        () => <p>Консоли</p>,
      ]}
    />
  );
};

export default ClientContextMenu;
