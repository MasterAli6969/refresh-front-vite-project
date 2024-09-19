import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomDynamicList from "../../../../../../common/smart-component/custom-dynamic-list/CustomDynamicList";

const ContentContextMenu: FC = () => {
  return (
    <CustomDynamicList
      listItem={[() => <p>Игры и приложения</p>, () => <p>Лицензии</p>]}
    />
  );
};

export default ContentContextMenu;
