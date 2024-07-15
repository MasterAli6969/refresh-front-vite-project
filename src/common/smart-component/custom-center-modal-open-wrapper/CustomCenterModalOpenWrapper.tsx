import { FC, PropsWithChildren, useCallback } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../features/redux/hooks/reduxRootHooks";
import { setToggle } from "../../../features/redux/reducers/common-reducers/toggleRedusers";

import { Dialog } from "@mui/material";

import { CustomCenterModalOpenWrapperProps } from "./customCenterModalOpenWrapper.interface";

const CustomCenterModalOpenWrapper: FC<
  PropsWithChildren<CustomCenterModalOpenWrapperProps>
> = ({ children, openComponents: OpenComponents }) => {
  const dispatch = useAppDispatch();
  const { isModalOpen } = useAppSelector((state) => state.toggle);
  const handleClickOpen = useCallback(() => {
    dispatch(setToggle({ key: "isModalOpen", value: true }));
  }, [dispatch]);

  const handleClose = useCallback(() => {
    dispatch(setToggle({ key: "isModalOpen", value: false }));
  }, [dispatch]);

  return (
    <>
      <button onClick={handleClickOpen}>{children}</button>
      <Dialog open={isModalOpen} onClose={handleClose}>
        <OpenComponents />
      </Dialog>
    </>
  );
};

export default CustomCenterModalOpenWrapper;
