import { FC } from "react";

import { RedaxStateProps } from "../../../../commonTypes.interface";
import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";

import styles from "./cutom_modal_window_universal.module.scss";

export interface CutomModalWindowUniversalPropsType extends RedaxStateProps {
  title: string;
  specialText?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  components: FC[];
}

const CutomModalWindowUniversal: FC<CutomModalWindowUniversalPropsType> = ({
  redaxStateKey,
  title,
  specialText,
  components,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <CustomModalCloseHead
        redaxStateKey={redaxStateKey}
        text={title}
        specialText={specialText}
      />
      {components &&
        components.length != 0 &&
        components.map((Components, index) => {
          return (
            <div key={index}>
              <Components />
            </div>
          );
        })}
    </form>
  );
};

export default CutomModalWindowUniversal;
