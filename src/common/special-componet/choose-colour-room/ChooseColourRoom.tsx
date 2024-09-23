import { FC } from "react";
import classNames from "classnames";
//СТИЛИ
import styles from "./choose_colour_room.module.scss";

interface ChooseColourRoomPropsType {
  chooseColor: string;
  setChooseColor: (color: string) => void;
}

// Массив цветов для отображения
const colorOptions = [
  { name: "light", color: "#d9d9d9" },
  { name: "orange_brown", color: "#df8925" },
  { name: "blue", color: "#0047ff" },
  { name: "violet", color: "#6b15f7" },
  { name: "purple", color: "#a600e0" },
  { name: "red", color: "#780000" },
  { name: "yellow", color: "#ffe500" },
  { name: "aqua", color: "#0effe2" },
  { name: "orange", color: "#f94b00" },
  { name: "light_green", color: "#97e87b" },
  { name: "neon_pink", color: "#ff00d6" },
];

const ChooseColourRoom: FC<ChooseColourRoomPropsType> = ({
  chooseColor,
  setChooseColor,
}) => {
  // Состояние для хранения выбранного цвета

  // Обработчик клика по цвету
  const handleColorClick = (color: string) => {
    setChooseColor(color);
  };

  return (
    <div className={styles.div}>
      <p>Выберите цвет комнаты</p>
      <div className={styles.subdiv_colors}>
        {colorOptions.map((colorOption) => (
          <div
            key={colorOption.name}
            className={classNames(styles[colorOption.name], {
              [styles._subdiv_colors_active]: chooseColor === colorOption.color,
            })}
            onClick={() => handleColorClick(colorOption.color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseColourRoom;
