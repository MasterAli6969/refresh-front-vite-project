import { FC, useCallback } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomContexMenuOpenUniversalWrapper from "../../../../../../../../../../../common/smart-component/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenUniversalWrapper";
import OffIcon from "../../../../../../../../../../../assets/icons-svg-components/pcIcon-context-menu/OffIcon";
import ArrowChekRight from "../../../../../../../../../../../assets/icons-svg-components/ArrowChekRight";
//СТИЛИ
import styles from "./power.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../../../../features/redux/hooks/reduxRootHooks";
import { setPcStatus } from "../../../../../../../../../../../features/redux/reducers/special-reducers/control-panel-reducers/pc-icon-reducers/pcIconStatusEditReducer";

interface PowerPropsType {
  comp_id: number;
}

const Power: FC<PowerPropsType> = ({ comp_id }) => {
  const isOnStatus = useAppSelector(
    (state) => state.pcIconStatusEdit.pcStatus[comp_id]?.isOnStatus ?? false
  );

  const dispatch = useAppDispatch();

  const handleClickChangeOnStatus = useCallback(() => {
    dispatch(
      setPcStatus({
        key: comp_id,
        field: "isOnStatus",
        status: !isOnStatus,
      })
    );
  }, [dispatch, isOnStatus, comp_id]);

  return (
    <CustomContexMenuOpenUniversalWrapper
      dropPosition="right"
      dropMenuItems={[
        () => (
          <h3 onClick={handleClickChangeOnStatus}>
            {isOnStatus ? "Выключить" : "Включить"}{" "}
          </h3>
        ),
        () => <h3>Перезагрузить</h3>,
      ]}
    >
      <div className={styles.div}>
        <OffIcon color="#fff" />
        <h5>Питание</h5>
        <ArrowChekRight color="#fff" />
      </div>
    </CustomContexMenuOpenUniversalWrapper>
  );
};

export default Power;
