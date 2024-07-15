import { FC, PropsWithChildren } from "react";

import { CustomRightModalOpenWrapperPropsType } from "./customRightModalOpenWrapper.interface";

import styles from "./custom_right_modal_open_wrapper.module.scss";

const CustomRightModalOpenWrapper: FC<
  PropsWithChildren<CustomRightModalOpenWrapperPropsType>
> = ({ children, openComponents: OpenComponents }) => {
  return (
    <div className={styles.div}>
      <div className="btn-group dropend">
        <button
          type="button"
          className="dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {children}
        </button>
        <div className="dropdown-menu">
          <OpenComponents />
        </div>
      </div>
    </div>
  );
};

export default CustomRightModalOpenWrapper;
