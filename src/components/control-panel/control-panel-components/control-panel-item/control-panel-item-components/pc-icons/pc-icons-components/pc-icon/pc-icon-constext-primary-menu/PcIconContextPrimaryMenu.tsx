import { FC } from "react";
//ИКОНКИ
import DangerIcon from "../../../../../../../../../assets/icons-svg-components/pcIcon-context-menu/DangerIcon";
import EditIcon from "../../../../../../../../../assets/icons-svg-components/pcIcon-context-menu/EditIcon";
import GuestIcon from "../../../../../../../../../assets/icons-svg-components/pcIcon-context-menu/GuestIcon";
import ManagementIcon from "../../../../../../../../../assets/icons-svg-components/pcIcon-context-menu/ManagementIcon";
import OffIcon from "../../../../../../../../../assets/icons-svg-components/pcIcon-context-menu/OffIcon";
import Checkmark from "../../../../../../../../../assets/icons/Checkmark.svg";
import ArrowChekRight from "../../../../../../../../../assets/icons-svg-components/ArrowChekRight";
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomContexMenuOpenUniversalWrapper from "../../../../../../../../../common/smart-component/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenUniversalWrapper";
import CustomCenterModalOpenWrapper from "../../../../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import GuestSessionModalWindows from "./constext-menu-primary-modai-windows/GuestSessionModalWindows";
//СТИЛИ
import styles from "./pc_icon_context_menu.module.scss";

interface PcIconContextPrimaryMenuPropsType {
  comp_id: number;
}

const PcIconContextPrimaryMenu: FC<PcIconContextPrimaryMenuPropsType> = ({
  comp_id,
}) => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        {/*/////////////////////////////////////// */}
        <CustomContexMenuOpenUniversalWrapper
          isListItemFlex={false}
          dropPosition="right"
          dropMenuItems={[
            () => <h3>Пополнение</h3>,
            () => <h3>Штраф</h3>,
            () => <h3>Отправить сообщение</h3>,
            () => <h3>Сменить место</h3>,
            () => <h3>Завершить сессию</h3>,
            () => <h3>Профиль клиента</h3>,
            () => <h3>История транзакций</h3>,
          ]}
        >
          <div className={styles.user_data}>
            <div>
              <img src="" />
              <h5>GG.August</h5>
            </div>
            <div>
              <img src="" />
              <h5>2 часа 11 минут</h5>
            </div>
            <ArrowChekRight color="#fff" />
          </div>
        </CustomContexMenuOpenUniversalWrapper>

        <div className={styles.list}>
          {/*/////////////////////////////////////// */}
          <div className={styles.list_item_start}>
            <img src={Checkmark} />
            <h5>Устройство: PC9</h5>
          </div>
          {/*/////////////////////////////////////// */}
          <CustomCenterModalOpenWrapper
            redaxStateKey={`GuestSessionModalWindows${comp_id}`}
            openComponents={() => (
              <GuestSessionModalWindows
                redaxStateKey={`GuestSessionModalWindows${comp_id}`}
                title="Гостевой сеанс"
              />
            )}
          >
            <div className={styles.list_item}>
              <div>
                <GuestIcon color="#fff" />
              </div>
              <h5>Гостевой сеанс</h5>
            </div>
          </CustomCenterModalOpenWrapper>

          {/*/////////////////////////////////////// */}
          <CustomContexMenuOpenUniversalWrapper
            dropPosition="right"
            dropMenuItems={[
              () => <h3>Удаленный контроль</h3>,
              () => <h3>Проводник Win</h3>,
              () => <h3>Запуск диспетчера</h3>,
            ]}
          >
            <div className={styles.list_item_special}>
              <EditIcon color="#fff" />
              <h5>Управление</h5>
              <ArrowChekRight color="#fff" />
            </div>
          </CustomContexMenuOpenUniversalWrapper>
          {/*/////////////////////////////////////// */}
          <div className={styles.list_item}>
            <div>
              <DangerIcon color="#fff" />
            </div>
            <h5>Режим ремонта</h5>
          </div>
          {/*/////////////////////////////////////// */}
          <CustomContexMenuOpenUniversalWrapper
            dropPosition="right"
            dropMenuItems={[() => <h3>Переместить</h3>, () => <h3>Удалить</h3>]}
          >
            <div className={styles.list_item_special}>
              <ManagementIcon color="#fff" />
              <h5>Редактирование</h5>
              <ArrowChekRight color="#fff" />
            </div>
          </CustomContexMenuOpenUniversalWrapper>
          {/*/////////////////////////////////////// */}
          <CustomContexMenuOpenUniversalWrapper
            dropPosition="right"
            dropMenuItems={[
              () => <h3>Выключить</h3>,
              () => <h3>Перезагрузить</h3>,
            ]}
          >
            <div className={styles.list_item_special}>
              <OffIcon color="#fff" />
              <h5>Питание</h5>
              <ArrowChekRight color="#fff" />
            </div>
          </CustomContexMenuOpenUniversalWrapper>
          {/*/////////////////////////////////////// */}
        </div>
      </div>
    </div>
  );
};

export default PcIconContextPrimaryMenu;

{
  /* <ArrowChekRight color="#fff" /> */
}
