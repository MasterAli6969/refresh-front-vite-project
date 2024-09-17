import { FC, useState } from "react";
// МОДУЛИ ДЛЯ РЕНДЕРА
import CutomModalWindowUniversal from "../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomToggleButton from "../../../../../../../../common/static-components/custom-toggle-button/CustomToggleButton";
import CustomCounterInput from "../../../../../../../../common/static-components/custom-counter-input/CustomCounterInput";
import CustomInput from "../../../../../../../../common/static-components/custom-input/CustomInput";
import CustomDualButtonYesNo from "../../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
// ИКОНКИ
import MoneyIconMini from "../../../../../../../../assets/icons/MoneyIconMini.svg";
import CardsIconMini from "../../../../../../../../assets/icons/CardsIconMini.svg";
// НЕОБХОДИМЫЕ ЧАСТИ ДЛЯ КОДА И ДАННЫХ
import { RedaxStateProps } from "../../../../../../../../commonTypes.interface";
// СТИЛИ
import styles from "./guest_session_modal_window.module.scss";

interface GuestSessionModalWindowPropsType extends RedaxStateProps {}

const GuestSessionModalWindow: FC<GuestSessionModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  const [toggles, setToggles] = useState<{
    sessionType: string;
    paymentType: string;
    receiptType: string;
  }>({
    sessionType: "",
    paymentType: "",
    receiptType: "",
  });

  const handleToggleChange = (
    toggleKey: keyof typeof toggles,
    activeItem: string
  ) => {
    setToggles((prev) => ({
      ...prev,
      [toggleKey]: activeItem,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <CutomModalWindowUniversal
      width="30rem"
      onSubmit={handleSubmit}
      redaxStateKey={redaxStateKey}
      title="Гостевой сеанс"
    >
      <CustomToggleButton
        label="Выберите тип сеанса"
        buttonsText={["Предоплата", "Бесплатный сеанс"]}
        onToggleChange={(activeItem) =>
          handleToggleChange("sessionType", activeItem)
        }
      />
      <div className={styles.subdiv_time_input}>
        <p>Время</p>
        <div>
          <CustomCounterInput placeholder="Количество часов" />
          <CustomCounterInput placeholder="Количество минут" />
        </div>
      </div>
      {toggles.sessionType === "Предоплата" && (
        <>
          <p>Введите время сеанса для автоматического подсчета средств</p>
          <div>
            <CustomInput
              label="Сумма платежа"
              placeholder="Введите сумму для расчета времени"
            />
            <p>Введите сумму платежа для автоматического расчета времени</p>
          </div>
          <CustomToggleButton
            label="Выберите тип оплаты"
            buttonsText={["Наличные", "Карта", "Разделить"]}
            onToggleChange={(activeItem) =>
              handleToggleChange("paymentType", activeItem)
            }
          />
          {toggles.paymentType === "Разделить" && (
            <>
              <CustomInput
                icon={MoneyIconMini}
                placeholder="Укажите сумму наличных"
              />
              <CustomInput
                icon={CardsIconMini}
                placeholder="Укажите сумму безналичных"
              />
            </>
          )}
          <CustomToggleButton
            label="Чек"
            buttonsText={["Печатать", "Отправить на почту"]}
            onToggleChange={(activeItem) =>
              handleToggleChange("receiptType", activeItem)
            }
          />
        </>
      )}
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Оплата"
      />
    </CutomModalWindowUniversal>
  );
};

export default GuestSessionModalWindow;
