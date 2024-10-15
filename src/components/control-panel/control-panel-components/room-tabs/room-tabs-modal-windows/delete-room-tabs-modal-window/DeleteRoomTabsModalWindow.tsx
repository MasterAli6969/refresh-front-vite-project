import { FC } from "react";
import { RedaxStateProps } from "../../../../../../commonTypes.interface";
import { useAppDispatch } from "../../../../../../features/redux/hooks/reduxRootHooks";
import { setOnClickDynamic } from "../../../../../../features/redux/reducers/common-reducers/onClickDynamicReduser";
import {
  resetModals,
  setToggleDynamic,
} from "../../../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";
import CutomModalWindowUniversal from "../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomDualButtonYesNo from "../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
//ИКОНКИ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ

export interface DeleteRoomTabsModalWindowPropsType extends RedaxStateProps {
  title: string;
  specialText?: string;
  descritpion?: string;
  rightButton: string;
}

const DeleteRoomTabsModalWindow: FC<DeleteRoomTabsModalWindowPropsType> = ({
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

export default DeleteRoomTabsModalWindow;
