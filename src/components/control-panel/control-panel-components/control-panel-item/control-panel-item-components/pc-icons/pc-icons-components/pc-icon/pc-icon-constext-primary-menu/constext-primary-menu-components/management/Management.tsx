import { FC, useCallback } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./management.module.scss";
import CustomContexMenuOpenUniversalWrapper from "../../../../../../../../../../../common/smart-component/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenUniversalWrapper";
import EditIcon from "../../../../../../../../../../../assets/icons-svg-components/pcIcon-context-menu/EditIcon";
import ArrowChekRight from "../../../../../../../../../../../assets/icons-svg-components/ArrowChekRight";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../../../../features/redux/hooks/reduxRootHooks";
import { setPcStatus } from "../../../../../../../../../../../features/redux/reducers/special-reducers/control-panel-reducers/pc-icon-reducers/pcIconStatusEditReducer";

interface ManagementPropsType {
  comp_id: number;
}

const Management: FC<ManagementPropsType> = ({ comp_id }) => {
  const isWinActiveStatus = useAppSelector(
    (state) =>
      state.pcIconStatusEdit.pcStatus[comp_id]?.isWinActiveStatus ?? false
  );

  const dispatch = useAppDispatch();

  const handleClickChangeRepairModeStatus = useCallback(() => {
    dispatch(
      setPcStatus({
        key: comp_id,
        field: "isWinActiveStatus",
        status: !isWinActiveStatus,
      })
    );
  }, [dispatch, isWinActiveStatus, comp_id]);

  return (
    <CustomContexMenuOpenUniversalWrapper
      dropPosition="right"
      dropMenuItems={[
        () => <h3>Удаленный контроль</h3>,
        () => (
          <h3 onClick={handleClickChangeRepairModeStatus}>Проводник Win</h3>
        ),
        () => <h3>Запуск диспетчера</h3>,
      ]}
    >
      <div className={styles.div}>
        <EditIcon color="#fff" />
        <h5>Управление</h5>
        <ArrowChekRight color="#fff" />
      </div>
    </CustomContexMenuOpenUniversalWrapper>
  );
};

export default Management;
