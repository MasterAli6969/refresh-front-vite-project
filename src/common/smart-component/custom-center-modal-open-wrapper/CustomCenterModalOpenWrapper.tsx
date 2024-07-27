import { FC, PropsWithChildren } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../features/redux/hooks/reduxRootHooks";
import { RedaxStateProps } from "../../../commonTypes.interface";
import {
  setToggle,
  ToggleStateType,
} from "../../../features/redux/reducers/common-reducers/single-component-reducers/toggleRedusers";
import { Dialog } from "@mui/material";
import {
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
  const isOpenSingle = useAppSelector(
    (state) => state.toggle[redaxStateKey as keyof ToggleStateType]
  );

  const isOpenDynamic = useAppSelector(
    (state) =>
      state.toggleDynamic.modalStates[
        redaxStateKey as keyof ToggleDynamicReduserStatesType["modalStates"]
      ]
  );

  const handleClickOpen = () => {
    if (type === "single") {
      dispatch(
        setToggle({ key: redaxStateKey as keyof ToggleStateType, value: true })
      );
    } else if (type === "dynamic") {
      dispatch(
        setToggleDynamic({
          id: redaxStateKey,
          value: true,
        })
      );
    }
  };

  const handleClickClose = () => {
    if (type === "single") {
      dispatch(
        setToggle({ key: redaxStateKey as keyof ToggleStateType, value: false })
      );
    } else if (type === "dynamic") {
      dispatch(
        setToggleDynamic({
          id: redaxStateKey,
          value: false,
        })
      );
    }
  };

  // Определение, открыто ли модальное окно
  const isOpen = type === "single" ? !!isOpenSingle : !!isOpenDynamic;

  return (
    <div style={{ cursor: "pointer" }}>
      <span onClick={handleClickOpen}>{children}</span>
      <Dialog open={isOpen} onClose={handleClickClose}>
        <OpenComponents />
      </Dialog>
    </div>
  );
};

export default CustomCenterModalOpenWrapper;
