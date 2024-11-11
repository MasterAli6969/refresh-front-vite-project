import { FC } from "react";
//ИКОНКИ
import GuestIcon from "../../../../../../../../../../../assets/icons-svg-components/pcIcon-context-menu/GuestIcon";
//МОДУЛИ ДЛЯ РАБОТЫ
import CustomCenterModalOpenWrapper from "../../../../../../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
//МОДУЛИ ДЛЯ РЕНДЕРА
import GuestSessionModalWindow from "./GuestSessionModalWindow";
//СТИЛИ
import styles from "./guest_session.module.scss";

interface GuestSessionPropsType {
  comp_id: number;
}

const GuestSession: FC<GuestSessionPropsType> = ({ comp_id }) => {
  return (
    <CustomCenterModalOpenWrapper
      redaxStateKey={`GuestSessionModalWindow${comp_id}`}
      openComponents={() => (
        <GuestSessionModalWindow
          comp_id={comp_id}
          redaxStateKey={`GuestSessionModalWindow${comp_id}`}
          title="Гостевой сеанс"
        />
      )}
    >
      <div className={styles.div}>
        <div>
          <GuestIcon color="#fff" />
        </div>
        <h5>Гостевой сеанс</h5>
      </div>
    </CustomCenterModalOpenWrapper>
  );
};

export default GuestSession;
