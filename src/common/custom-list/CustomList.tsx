import ArrowChekRight from "../../assets/icons/ArrowChekUp.svg";
import styles from "./custom_list.module.scss";

function CustomList() {
  return (
    <ul className={styles.ul}>
      <li className={styles.li_statik}>
        <a href="#">
          <h4>Инвентаризация</h4>
        </a>
      </li>
      <li className={styles.li_dropdown}>
        <button
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample1"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          <h4>Веб-администратор</h4>
          <img src={ArrowChekRight} />
        </button>
        <div className="collapse multi-collapse" id="multiCollapseExample1">
          Some placeholder content for the first collapse component of this
          multi-collapse example. This panel is hidden by default but revealed
          when the user activates the relevant trigger.
        </div>
      </li>
    </ul>
  );
}

export default CustomList;
