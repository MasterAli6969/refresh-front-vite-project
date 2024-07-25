import { FC } from "react";
import { RedaxStateProps } from "../../../../commonTypes.interface";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../features/redux/hooks/reduxRootHooks";
import { NumberStatesType } from "../../../../features/redux/reducers/common-reducers/saveNumberReduser";

import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";
import CustomDualButtonYesNo from "../../../static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

import styles from "./cutom_modal_window_type2.module.scss";
import { setClick } from "../../../../features/redux/reducers/common-reducers/onClickReduser";

export interface CutomModalWindowType2PropsType extends RedaxStateProps {
  title: string;
  specialText?: string;
  descritpion?: string;
  rightButton: string;
}

const CutomModalWindowType2: FC<CutomModalWindowType2PropsType> = ({
  redaxStateKey,
  title,
  specialText,
  descritpion,
  rightButton,
}) => {
  const isSaveNumber = useAppSelector(
    (state) => state.number[redaxStateKey as keyof NumberStatesType]
  );

  const redaxSpecialStateKey = `${redaxStateKey}${isSaveNumber}`;

  const dispatch = useAppDispatch();

  const handleRightClick = () => {
    if (isSaveNumber != null && isSaveNumber > 1) {
      dispatch(
        setClick({
          key: redaxSpecialStateKey,
          value: true,
        })
      );
    }
    console.log("КОМПОНЕНТ CutomModalWindowType2", redaxSpecialStateKey);

    console.log("СОСТОЯНИЕ ВЫБРАННОЙ ВКЛАДКИ", isSaveNumber);
  };

  return (
    <form className={styles.div}>
      <div>
        <CustomModalCloseHead
          redaxStateKey={redaxSpecialStateKey}
          text={title}
          specialText={specialText}
        />
      </div>
      {descritpion && (
        <div>
          <p>{descritpion}</p>
        </div>
      )}
      <div>
        <CustomDualButtonYesNo
          onClickRightButton={handleRightClick}
          redaxStateKey={redaxSpecialStateKey}
          buttonRightText={rightButton}
        />
      </div>
    </form>
  );
};

export default CutomModalWindowType2;
