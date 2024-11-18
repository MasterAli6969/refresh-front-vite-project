import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import { CutomModalWindowUniversalDefaultPropsType } from "../../../../../../../../../../../../../commonTypes.interface";
import CutomModalWindowUniversal from "../../../../../../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomCounterInput from "../../../../../../../../../../../../../common/static-components/inputs/custom-counter-input/CustomCounterInput";
import CustomTextarea from "../../../../../../../../../../../../../common/static-components/inputs/custom-textarea/CustomTextarea";

export interface PenaltyModalWindowPropsType
  extends CutomModalWindowUniversalDefaultPropsType {}

const PenaltyModalWindow: FC<PenaltyModalWindowPropsType> = ({
  redaxStateKey,
  title,
  specialText,
}) => {
  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title={title}
      specialText={specialText}
    >
      <CustomCounterInput
        label="Штрафное время"
        placeholder="Количество штрафных минут"
      />
      <CustomCounterInput
        label="Сумма штрафа пользователя (основной баланс)"
        placeholder="Введите сумму штрафа"
      />
      <CustomCounterInput
        label="Сумма штрафа пользователя (бонусный баланс)"
        placeholder="Введите сумму штрафа"
      />
      <CustomTextarea
        label="Комментарий"
        placeholder="Укажите причину штрафа пользователя..."
      />
    </CutomModalWindowUniversal>
  );
};

export default PenaltyModalWindow;
