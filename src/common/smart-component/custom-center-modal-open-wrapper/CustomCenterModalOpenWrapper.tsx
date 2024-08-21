import { FC, PropsWithChildren } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../features/redux/hooks/reduxRootHooks";
import { RedaxStateProps } from "../../../commonTypes.interface";
import { Dialog } from "@mui/material";
import {
  setToggleDynamic,
  ToggleDynamicReduserStatesType,
} from "../../../features/redux/reducers/common-reducers/toggleDynamicReduser";

export interface CustomCenterModalOpenWrapperProps extends RedaxStateProps {
  openComponents: FC;
}

const CustomCenterModalOpenWrapper: FC<
  PropsWithChildren<CustomCenterModalOpenWrapperProps>
> = ({ children, redaxStateKey, openComponents: OpenComponents }) => {
  const dispatch = useAppDispatch();

  const isOpenDynamic = useAppSelector(
    (state) =>
      state.toggleDynamic.modalStates[
        redaxStateKey as keyof ToggleDynamicReduserStatesType["modalStates"]
      ] ?? false // Добавлена защита от undefined
  );

  const handleClickOpen = () => {
    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
        value: true,
      })
    );
  };

  const handleClickClose = () => {
    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
        value: false,
      })
    );
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <span onClick={handleClickOpen}>{children}</span>
      <Dialog
        sx={{ backgroundColor: "transparent", color: "white" }}
        open={isOpenDynamic}
        onClose={handleClickClose}
      >
        <OpenComponents />
      </Dialog>
    </div>
  );
};

export default CustomCenterModalOpenWrapper;
