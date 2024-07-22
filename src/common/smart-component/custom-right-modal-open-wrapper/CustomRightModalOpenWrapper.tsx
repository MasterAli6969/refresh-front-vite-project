// CustomRightModalOpenWrapper.tsx
import { FC, PropsWithChildren } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../features/redux/hooks/reduxRootHooks";
import {
  setToggle,
  ToggleStateType,
} from "../../../features/redux/reducers/common-reducers/toggleRedusers";
import classNames from "classnames";
import { RedaxStateProps } from "../../../commonTypes.interface";

import styles from "./custom_right_modal_open_wrapper.module.scss";

export interface CustomRightModalOpenWrapperPropsType extends RedaxStateProps {
  openComponents: FC;
}

const CustomRightModalOpenWrapper: FC<
  PropsWithChildren<CustomRightModalOpenWrapperPropsType>
> = ({ children, redaxStateKey, openComponents: OpenComponents }) => {
  const isOpen = useAppSelector(
    (state) => state.toggle[redaxStateKey as keyof ToggleStateType]
  );
  const dispatch = useAppDispatch();

  const handleModalVisible = () => {
    dispatch(
      setToggle({
        key: redaxStateKey as keyof ToggleStateType,
        value: !isOpen,
      })
    );
  };

  return (
    <div className={styles.div}>
      <span onClick={handleModalVisible}>{children}</span>
      <div
        className={classNames(styles.open_components, {
          [styles._visible]: isOpen,
        })}
      >
        <OpenComponents />
      </div>
    </div>
  );
};

export default CustomRightModalOpenWrapper;
