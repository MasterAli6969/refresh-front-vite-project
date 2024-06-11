import { FC } from "react";
import NewShiftWindow from "../../../../common/all-modal-windows/new-shift-window/NewShiftWindow";
import { useAppSelector } from "../../../../features/redux/hooks/reduxRootHooks";
import styles from "./shift_block.module.scss";

import CustomModalOpenContainer from "../../../../common/custom-modal-open-container/CustomModalOpenContainer";

const ShiftBlock: FC = () => {
  const { isOpenShift } = useAppSelector((state) => state.toggle);

  return (
    <div className={styles.div}>
      <div>
        <h3>Сотрудник смены</h3>
        {isOpenShift ? (
          <h3>Алексей Лариков</h3>
        ) : (
          <h3>На смене нет сотрудника</h3>
        )}
      </div>
      <div>
        <h3>Начало смены</h3>
        {isOpenShift ? <h3>11.11.2011 09:00</h3> : <h3>Смена не открыта</h3>}
      </div>

      {isOpenShift ? (
        <button>Закрыть смену</button>
      ) : (
        <CustomModalOpenContainer openComponents={NewShiftWindow}>
          Открыть смену
        </CustomModalOpenContainer>
      )}
    </div>
  );
};

export default ShiftBlock;
