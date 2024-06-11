import { FC } from "react";
import { useAppDispatch } from "../../features/redux/hooks/reduxRootHooks";
import { setToggle } from "../../features/redux/reducers/common-reducers/toggleRedusers";
import CloseIcon from "../../assets/icons-svg-components/CloseIcon";
import { CustomModalHeadPropsType } from "./customModalHead.interface";
import styles from "./custom_modal_head.module.scss";

const CustomModalHead: FC<CustomModalHeadPropsType> = ({
  text,
  specialText,
}) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setToggle({ key: "isModalOpen", value: false }));
  };

  return (
    <div className={styles.div}>
      <h3>
        {text}
        {specialText && <span> {specialText} </span>}
      </h3>
      <div onClick={handleClose}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default CustomModalHead;
