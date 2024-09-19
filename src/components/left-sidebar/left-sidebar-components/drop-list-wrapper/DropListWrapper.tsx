import { FC, PropsWithChildren } from "react";
import classNames from "classnames";

import ArrowChekRight from "../../../../assets/icons-svg-components/ArrowChekRight";

import styles from "./drop_list_wrapper.module.scss";

interface DropListWrapperPropsType {
  id: number;
  dropMenuComponents: FC;
}

const DropListWrapper: FC<PropsWithChildren<DropListWrapperPropsType>> = ({
  children,
  id,
  dropMenuComponents: DropMenuComponents,
}) => {
  return (
    <div className={styles.div}>
      <button
        className="p-0"
        data-bs-toggle="collapse"
        data-bs-target={`#multiCollapseExample${id}`}
        aria-expanded="false"
        aria-controls={`multiCollapseExample${id}`}
      >
        {children}
        <ArrowChekRight color="#6C7275" />
      </button>
      <div
        className={classNames("collapse multi-collapse", styles.div_menu)}
        id={`multiCollapseExample${id}`}
      >
        <DropMenuComponents />
      </div>
    </div>
  );
};

export default DropListWrapper;
