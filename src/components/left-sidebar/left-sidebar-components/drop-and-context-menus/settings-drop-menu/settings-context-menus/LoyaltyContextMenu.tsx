import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomDynamicList from "../../../../../../common/smart-component/custom-dynamic-list/CustomDynamicList";

const LoyaltyContextMenu: FC = () => {
  return (
    <CustomDynamicList
      listItem={[
        () => <p>Рейтинг участников</p>,
        () => <p>Достижения</p>,
        () => <p>Ежедневные награды</p>,
        () => <p>Промокоды</p>,
      ]}
    />
  );
};

export default LoyaltyContextMenu;
