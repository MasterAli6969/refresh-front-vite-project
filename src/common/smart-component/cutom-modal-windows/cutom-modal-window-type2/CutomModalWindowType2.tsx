import { FC } from "react";
import { RedaxStateProps } from "../../../../commonTypes.interface";
import { useAppDispatch } from "../../../../features/redux/hooks/reduxRootHooks";

import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";
import CustomDualButtonYesNo from "../../../static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

import styles from "./cutom_modal_window_type2.module.scss";
import { setToggleDynamic } from "../../../../features/redux/reducers/common-reducers/dynamic-component-reducers/toggleDynamicReduser";

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
  const dispatch = useAppDispatch();

  const handleRightClick = () => {
    dispatch(
      setToggleDynamic({
        id: "roomTabDelete",
        value: true,
      })
    );
  };
  return (
    <form className={styles.div}>
      <div>
        <CustomModalCloseHead
          redaxStateKey={redaxStateKey}
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
          redaxStateKey={redaxStateKey}
          buttonRightText={rightButton}
        />
      </div>
    </form>
  );
};

export default CutomModalWindowType2;