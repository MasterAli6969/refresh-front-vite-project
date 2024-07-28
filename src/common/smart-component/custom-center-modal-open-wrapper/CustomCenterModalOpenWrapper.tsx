import { FC, PropsWithChildren } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../features/redux/hooks/reduxRootHooks";
import { RedaxStateProps } from "../../../commonTypes.interface";
import { ToggleStateType } from "../../../features/redux/reducers/common-reducers/single-component-reducers/toggleRedusers";
import { Dialog } from "@mui/material";
import {
  resetModals,
  setToggleDynamic,
  ToggleDynamicReduserStatesType,
} from "../../../features/redux/reducers/common-reducers/dynamic-component-reducers/toggleDynamicReduser";

export interface CustomCenterModalOpenWrapperProps extends RedaxStateProps {
  type: "single" | "dynamic";
  openComponents: FC;
}

const CustomCenterModalOpenWrapper: FC<
  PropsWithChildren<CustomCenterModalOpenWrapperProps>
> = ({ children, redaxStateKey, openComponents: OpenComponents, type }) => {
  const dispatch = useAppDispatch();

  // Определение состояния открытия модальных окон

  const isOpenDynamic = useAppSelector(
    (state) =>
      state.toggleDynamic.modalStates[
        redaxStateKey as keyof ToggleDynamicReduserStatesType["modalStates"]
      ]
  );

  const handleClickOpen = () => {
    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
        value: true,
      }),
      resetModals()
    );
  };

  const handleClickClose = () => {
    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
        value: false,
      }),
      resetModals()
    );
  };

  // Определение, открыто ли модальное окно

  return (
    <div style={{ cursor: "pointer" }}>
      <span onClick={handleClickOpen}>{children}</span>
      <Dialog open={isOpenDynamic} onClose={handleClickClose}>
        <OpenComponents />
      </Dialog>
    </div>
  );
};

export default CustomCenterModalOpenWrapper;
