import { FC } from "react";
import CustomDynamicList from "../../../../../../../common/smart-component/custom-dynamic-list/CustomDynamicList";
import CustomCenterModalOpenWrapper from "../../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import RelocatePcModalWindow from "../pc-icon-menu-modal-windows/relocate-pc-modal-window/RelocatePcModalWindow";

export const ManagementMenu: FC = () => {
  return (
    <CustomDynamicList
      listItem={[
        () => <div>Удаленный контроль</div>,
        () => <div>Проводник Win</div>,
        () => <div>Запуск диспетчера</div>,
      ]}
    />
  );
};

export const EditingMenu: FC = () => {
  return (
    <CustomDynamicList
      listItem={[
        () => (
          <div>
            <CustomCenterModalOpenWrapper
              redaxStateKey="relocatePcModalWindow"
              openComponents={() => (
                <RelocatePcModalWindow redaxStateKey="relocatePcModalWindow" />
              )}
            >
              Переместить
            </CustomCenterModalOpenWrapper>
          </div>
        ),
        () => <div>Удалить</div>,
      ]}
    />
  );
};
export const PowerMenu: FC = () => {
  return (
    <CustomDynamicList
      listItem={[() => <div>Выключить</div>, () => <div>Перезагрузить</div>]}
    />
  );
};
