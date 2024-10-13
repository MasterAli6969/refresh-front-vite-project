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
      ] ?? false
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
      <span style={{ width: "100%" }} onClick={handleClickOpen}>
        {children}
      </span>
      <Dialog
        open={isOpenDynamic}
        onClose={handleClickClose}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "transparent",
            color: "white",
            maxWidth: "none",
          },
          "& .MuiDialogContent-root": {
            overflowY: "hidden !impotent",
          },
        }}
      >
        <OpenComponents />
      </Dialog>
    </div>
  );
};

export default CustomCenterModalOpenWrapper;
