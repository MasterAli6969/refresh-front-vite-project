import { FC } from "react";
import { RedaxStateProps } from "../../../../../commonTypes.interface";
import { useAppDispatch } from "../../../../../features/redux/hooks/reduxRootHooks";

import CustomDualButtonYesNo from "../../../../static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

import {
  resetModals,
  setToggleDynamic,
} from "../../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";
import { setOnClickDynamic } from "../../../../../features/redux/reducers/common-reducers/onClickDynamicReduser";
import CutomModalWindowUniversal from "../../cutom-modal-window-universal/CutomModalWindowUniversal";

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
      setOnClickDynamic({
        key: redaxStateKey,
        value: true,
      })
    );

    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
        value: false,
      }),
      resetModals()
    );
  };
  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title={title}
      specialText={specialText}
    >
      <p>{descritpion && descritpion}</p>
      <CustomDualButtonYesNo
        onClickRightButton={handleRightClick}
        redaxStateKey={redaxStateKey}
        buttonRightText={rightButton}
      />
    </CutomModalWindowUniversal>
  );
};

export default CutomModalWindowType2;
