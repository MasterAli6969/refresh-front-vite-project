import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./general_settings.module.scss";
import CustomInput from "../../../../common/static-components/custom-input/CustomInput";
import CustomSelect from "../../../../common/static-components/custom-select/CustomSelect";
import CustomMaterialSwitch from "../../../../common/static-components/custom-material-switch/CustomMaterialSwitch";
import CustomCounterInput from "../../../../common/static-components/custom-counter-input/CustomCounterInput";
import CustomRadioButton from "../../../../common/static-components/custom-radio-button/CustomRadioButton";

const GeneralSettings: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <div>
          <h4>Название клуба</h4>
          <h5>Оно будет отображаться как в веб-панели</h5>
        </div>
        <div>
          <CustomInput placeholder="Введите название клуба" />
        </div>
      </div>
      <div className={styles.subdiv}>
        <div>
          <h4>Язык</h4>
          <h5>Язык контрольной панели</h5>
        </div>
        <div>
          <CustomSelect
            selectTitle=""
            customSelectData={[
              { id: 1, selectItem: "Русский" },
              { id: 2, selectItem: "Английский" },
            ]}
          />
        </div>
      </div>
      <div className={styles.subdiv}>
        <div>
          <h4>Временная зона</h4>
          <h5>Выберите временную зону вашего центра</h5>
        </div>
        <div>
          <CustomSelect
            selectTitle=""
            customSelectData={[
              { id: 1, selectItem: "GMT(+3) Moscow, Russia" },
              { id: 2, selectItem: "GMT(+1) Istanbul, Turkey" },
            ]}
          />
        </div>
      </div>
      <div className={styles.subdiv}>
        <div>
          <h4>Основная платежная валюта</h4>
          <h5>
            Оно будет отображаться как в веб-панели, так и в клиентской части
          </h5>
        </div>
        <div>
          <CustomSelect
            selectTitle=""
            customSelectData={[
              { id: 1, selectItem: "₽ (Российский рубль)" },
              { id: 2, selectItem: "$ (Доллар США)" },
            ]}
          />
        </div>
      </div>
      <div className={styles.subdiv}>
        <div>
          <h4>Регистрация клиентов</h4>
          <h5>
            Включение данной функции сделает регистрацию клиентов обязательной и
            сделает <br />
            невозможной гостевой сессию
          </h5>
        </div>
        <div>
          <CustomMaterialSwitch />
        </div>
      </div>
      <div className={styles.subdiv}>
        <div>
          <h4>Конвертация гостевого сеанса</h4>
          <h5>
            Разрешить регистрацию пользователя из среды гостевого сеанса. Баланс{" "}
            <br />и время пользователя будут перенесены автоматически
          </h5>
        </div>
        <div>
          <CustomMaterialSwitch />
        </div>
      </div>
      <div className={styles.subdiv}>
        <div>
          <h4>Возврат средств и отмена покупок</h4>
          <h5>
            Установить ограничение на отмену покупок и возврат средств (мин)
          </h5>
        </div>
        <div>
          <CustomCounterInput placeholder="Введите время.." />
        </div>
      </div>
      <div className={styles.subdiv}>
        <div>
          <h4>Режим смены администратора</h4>
          <h5>
            При выборе строгого режима, смена администратора будет закрыта в
            назначенное время
          </h5>
        </div>
        <div>
          <CustomRadioButton radioLeft="Свободный" redioRight="Строгий" />
        </div>
      </div>
      <div className={styles.subdiv}>
        <div>
          <h4>Верификация с помощью телефона</h4>
          <h5>
            Если вы хотите использовать верификацию пользователя с помощью SMS,
            включите данную функцию
          </h5>
        </div>
        <div>
          <CustomMaterialSwitch />
        </div>
      </div>
      <div className={styles.subdiv}>
        <div>
          <h4>Ограничение посещения (18+)</h4>
          <h5>
            Ограничение посещения клиентов не достигших совершеннолетнего
            возраста после 22:00
          </h5>
        </div>
        <div>
          <CustomMaterialSwitch />
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
