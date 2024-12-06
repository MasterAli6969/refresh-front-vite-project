import { FC, PropsWithChildren } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./custom_universal_div.module.scss";
import classNames from "classnames";

export interface CustomUniversalDivPropsType {
  width?: string;
  height?: string;
  backgroundColor?: "primary" | "secondary" | "tertiary" | "special";
  padding?: string;
}

const CustomUniversalDiv: FC<
  PropsWithChildren<CustomUniversalDivPropsType>
> = ({
  children,
  width = "100%",
  height = "auto",
  backgroundColor = "primary",
  padding = "0.75rem",
}) => {
  return (
    <div
      style={{
        width: `${width}`,
        height: `${height}`,
        padding: `${padding}`,
      }}
      className={classNames(styles.div, {
        [styles.secondary]: backgroundColor === "secondary",
        [styles.tertiary]: backgroundColor === "tertiary",
        [styles.special]: backgroundColor === "special",
      })}
    >
      {children}
    </div>
  );
};

export default CustomUniversalDiv;
