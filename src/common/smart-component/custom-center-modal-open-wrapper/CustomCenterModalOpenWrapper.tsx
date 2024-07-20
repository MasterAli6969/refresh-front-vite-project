import { FC, PropsWithChildren } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../features/redux/hooks/reduxRootHooks";
import {
  setToggle,
  ToggleStateType,
} from "../../../features/redux/reducers/common-reducers/toggleRedusers";

import { Dialog } from "@mui/material";

import { CustomCenterModalOpenWrapperProps } from "./customCenterModalOpenWrapper.interface";

const CustomCenterModalOpenWrapper: FC<
  PropsWithChildren<CustomCenterModalOpenWrapperProps>
> = ({ children, redaxStateKey, openComponents: OpenComponents }) => {
  const isOpen = useAppSelector(
    (state) => state.toggle[redaxStateKey as keyof ToggleStateType]
  );

  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    dispatch(
      setToggle({
        key: redaxStateKey as keyof ToggleStateType,
        value: true,
      })
    );
  };

  const handleClickClose = () => {
    dispatch(
      setToggle({
        key: redaxStateKey as keyof ToggleStateType,
        value: true,
      })
    );
  };

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
