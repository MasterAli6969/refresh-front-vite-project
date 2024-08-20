import { FC, useState } from "react";

import CustomModalCloseHead from "../../../../../../common/smart-component/custom-modal-close-head/CustomModalCloseHead";
import CartItem from "../../../../shop-common/cart-items/CartItems";
import TotalPurchase from "../../../../shop-common/total-purchase/TotalPurchase";
import CustomToggleButton from "../../../../../../common/static-components/custom-toggle-button/CustomToggleButton";
import CustomInput from "../../../../../../common/static-components/custom-input/CustomInput";
import CustomDualButtonYesNo from "../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

import { RedaxStateProps } from "../../../../../../commonTypes.interface";

import styles from "./payment_modal_window.module.scss";

export interface PaymentModalWindowPropsType extends RedaxStateProps {}

const PaymentModalWindow: FC<PaymentModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  const [selectedPaymantType, setSelectedPaymantType] = useState<string>("");

  const handleToggleChange = (activeItem: string) => {
    setSelectedPaymantType(activeItem);
  };

  return (
    <div className={styles.div}>
      <CustomModalCloseHead
        redaxStateKey={redaxStateKey}
        text="Оплата чека 5667FDHUDF67567"
      />
      <div className={styles.sub_div}>
        <div className={styles.sub_div_left}>
          <CartItem />
        </div>
        <div className={styles.sub_div_right}>
          <TotalPurchase />
          <div>
            <p>Способ оплаты</p>
            <div>
              <CustomToggleButton
                buttonsText={["Наличные", "Карта", "Разделить"]}
                onToggleChange={handleToggleChange}
              />
            </div>
            {selectedPaymantType === "Разделить" && (
              <div>
                <CustomInput placeholder="Укажите сумму наличных" />
                <CustomInput placeholder="Укажите сумму безналичных" />
              </div>
            )}
          </div>
          <div>
            <p>Чек</p>
            <div>
              <CustomToggleButton
                buttonsText={["Печатать", "Отправить на почту"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <CustomDualButtonYesNo
          buttonRightText="Оплата"
          redaxStateKey={redaxStateKey}
        />
      </div>
    </div>
  );
};

export default PaymentModalWindow;
