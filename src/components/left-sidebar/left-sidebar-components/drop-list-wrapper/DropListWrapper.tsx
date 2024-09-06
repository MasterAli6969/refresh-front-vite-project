import { FC, PropsWithChildren } from "react";

import ArrowChekRight from "../../../../assets/icons-svg-components/ArrowChekRight";

import styles from "./drop_list_wrapper.module.scss";
import { ListType } from "../../../../commonTypes.interface";

interface DropListWrapperPropsType {
  dropMenuRender?: ListType[];
}

const DropListWrapper: FC<PropsWithChildren<DropListWrapperPropsType>> = ({
  children,
  dropMenuRender,
}) => {
  return (
    <div className={styles.div}>
      <button
        data-bs-toggle="collapse"
        data-bs-target={`#multiCollapseExample1`}
        aria-expanded="false"
        aria-controls={`multiCollapseExample1`}
      >
        {children}
        <ArrowChekRight color="#6C7275" />
      </button>
      <ul className="collapse multi-collapse" id={`multiCollapseExample1`}>
        {dropMenuRender &&
          dropMenuRender.map((item: ListType) => {
            return (
              <li key={item.id}>
                <a href={item.url}>
                  <h4>{item.title}</h4>
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default DropListWrapper;
