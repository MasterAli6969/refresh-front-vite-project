import { FC, useLayoutEffect, useState, PropsWithChildren } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../features/redux/hooks/reduxRootHooks";
import { RedaxStateProps } from "../../../commonTypes.interface";
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

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [modalSize, setModalSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Для задания начальных размеров

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleModalRef = (modal: HTMLDivElement | null) => {
    if (modal) {
      const { offsetWidth, offsetHeight } = modal;
      if (
        offsetWidth !== modalSize.width ||
        offsetHeight !== modalSize.height
      ) {
        setModalSize({
          width: offsetWidth,
          height: offsetHeight,
        });
      }
    }
  };

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

  const modalStyles = {
    left: `${(windowSize.width - modalSize.width) / 2}px`,
    top: `${(windowSize.height - modalSize.height) / 2}px`,
    position: "fixed" as const,
  };

  return (
    <div style={{ cursor: "pointer", zIndex: "25" }}>
      <span onClick={handleClickOpen}>{children}</span>
      {isOpenDynamic && (
        <div
          ref={handleModalRef}
          style={{
            ...modalStyles,
          }}
        >
          <OpenComponents />
        </div>
      )}
    </div>
  );
};

export default CustomCenterModalOpenWrapper;
