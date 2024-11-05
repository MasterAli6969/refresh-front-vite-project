import { FC, useCallback } from "react";
//ИКОНКИ
import Checkmark from "../../../../../../../../../assets/icons/Checkmark.svg";
//МОДУЛИ ДЛЯ РАБОТЫ
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../../features/redux/hooks/reduxRootHooks";
import { setPcStatus } from "../../../../../../../../../features/redux/reducers/special-reducers/control-panel-reducers/pc-icon-reducers/pcIconStatusEditReducer";
//МОДУЛИ ДЛЯ РЕНДЕРА
import UserData from "./constext-primary-menu-components/user-data/UserData";
import GuestSession from "./constext-primary-menu-components/guest-session/GuestSession";
import Management from "./constext-primary-menu-components/management/Management";
import RepairMode from "./constext-primary-menu-components/repair-mode/RepairMode";
import Editing from "./constext-primary-menu-components/editing/Editing";
import Power from "./constext-primary-menu-components/power/Power";
//СТИЛИ
import styles from "./pc_icon_context_menu.module.scss";

interface PcIconContextPrimaryMenuPropsType {
  comp_id: number;
}

const PcIconContextPrimaryMenu: FC<PcIconContextPrimaryMenuPropsType> = ({
  comp_id,
}) => {
  const isRepairModeStatus = useAppSelector(
    (state) =>
      state.pcIconStatusEdit.pcStatus[comp_id]?.isRepairModeStatus ?? false
  );

  const dispatch = useAppDispatch();

  const handleClickChangeRepairModeStatus = useCallback(() => {
    dispatch(
      setPcStatus({
        key: comp_id,
        field: "isRepairModeStatus",
        status: !isRepairModeStatus,
      })
    );
  }, [dispatch, isRepairModeStatus, comp_id]);

  return (
    <div className={styles.div}>
      <span>
        <UserData comp_id={comp_id} />
      </span>
      <div className={styles.subdiv_title}>
        <img src={Checkmark} />
        <h5>Устройство: PC9</h5>
      </div>
      <div>
        <GuestSession comp_id={comp_id} />
      </div>
      <div>
        <Management comp_id={comp_id} />
      </div>
      <div onClick={handleClickChangeRepairModeStatus}>
        <RepairMode comp_id={comp_id} />
      </div>
      <div>
        <Editing comp_id={0} />
      </div>
      <div>
        <Power comp_id={comp_id} />
      </div>
    </div>
  );
};

export default PcIconContextPrimaryMenu;

{
  /* <ArrowChekRight color="#fff" /> */
}
