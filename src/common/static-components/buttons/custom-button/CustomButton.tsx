import {
  FC,
  PropsWithChildren,
  ReactNode,
  cloneElement,
  ReactElement,
  Children,
  isValidElement,
} from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import classNames from "classnames";
//СТИЛИ
import styles from "./custom_button.module.scss";

export interface CustomButtonPropsType {
  width?: string;
  color?: "light" | "dark" | "warning" | "transparent" | "special";
  type?: "button" | "submit" | "reset";
  imgSize?: string; // Добавляем необязательный пропс для размера изображения
  isActive?: boolean;
  onClick?: () => void;
}

const CustomButton: FC<PropsWithChildren<CustomButtonPropsType>> = ({
  children,
  width = "auto",
  color = "transparent",
  type,
  imgSize,
  isActive,
  onClick,
}) => {
  // Функция для изменения размеров img элементов внутри children
  const modifyChildren = (children: ReactNode): ReactNode => {
    return Children.map(children, (child) => {
      if (isValidElement(child) && child.type === "img") {
        // Если это элемент img, клонируем его с новым стилем размера
        return cloneElement(child as ReactElement, {
          style: { width: imgSize, height: imgSize },
        });
      }
      return child;
    });
  };

  return (
    <button
      style={{ width: `${width}` }}
      onClick={onClick}
      className={classNames(styles.button, {
        [styles._light]: color === "light",
        [styles._special_light]: color === "special",
        [styles._dark]: color === "dark",
        [styles._warning]: color === "warning",
        [styles._transparent]: color === "transparent",
        [styles._active]: isActive === true,
      })}
      type={type ? type : "button"}
    >
      {modifyChildren(children)}
    </button>
  );
};

export default CustomButton;
