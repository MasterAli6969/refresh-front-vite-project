import { FC } from "react";
// КОМПОНЕНТЫ ИКОНКИ
import ControlPanelIcon from "../../../assets/icons-svg-components/left-sidebar-icons/ControlPanelIcon";
import HistoryIcon from "../../../assets/icons-svg-components/left-sidebar-icons/HistoryIcon";
import KnowledgeBaseIcon from "../../../assets/icons-svg-components/left-sidebar-icons/KnowledgeBaseIcon";
import MessagesIcon from "../../../assets/icons-svg-components/left-sidebar-icons/MessagesIcon";
import NotificationsIcons from "../../../assets/icons-svg-components/left-sidebar-icons/NotificationsIcons";
import ReservationsIcon from "../../../assets/icons-svg-components/left-sidebar-icons/ReservationsIcon";
import SettingsIcon from "../../../assets/icons-svg-components/left-sidebar-icons/SettingsIcon";
import ShopIcon from "../../../assets/icons-svg-components/left-sidebar-icons/ShopIcon";
import StatisticsIcon from "../../../assets/icons-svg-components/left-sidebar-icons/StatisticsIcon";
import TransactionsIcon from "../../../assets/icons-svg-components/left-sidebar-icons/TransactionsIcon";
import ArrowChekRight from "../../../assets/icons-svg-components/ArrowChekRight";
import UsersIcon from "../../../assets/icons-svg-components/left-sidebar-icons/UsersIcon";
import CloseIcon from "../../../assets/icons-svg-components/CloseIcon";
import DangerIcon from "../../../assets/icons-svg-components/pcIcon-context-menu/DangerIcon";
import EditIcon from "../../../assets/icons-svg-components/pcIcon-context-menu/EditIcon";
import GuestIcon from "../../../assets/icons-svg-components/pcIcon-context-menu/GuestIcon";
import ManagementIcon from "../../../assets/icons-svg-components/pcIcon-context-menu/ManagementIcon";
import OffIcon from "../../../assets/icons-svg-components/pcIcon-context-menu/OffIcon";

const SandboxIcon: FC = () => {
  return (
    <>
      <h1>РЕНДЕР КОМПОНЕТОВ ДИНАМИЧНЫХ ИКОНОК</h1>
      <h1>ЭТО ИКОНКИ ИЗ ЛЕВОГО САЙДБАРА</h1>
      <div>
        <h2>1</h2>
        <ControlPanelIcon color="#fff" />
      </div>
      <div>
        <h2>2</h2>
        <HistoryIcon color="#fff" />
      </div>
      <div>
        <h2>3</h2>
        <KnowledgeBaseIcon color="#fff" />
      </div>
      <div>
        <h2>4</h2>
        <MessagesIcon color="#fff" />
      </div>
      <div>
        <h2>5</h2>
        <NotificationsIcons color="#fff" />
      </div>
      <div>
        <h2>6</h2>
        <ReservationsIcon color="#fff" />
      </div>
      <div>
        <h2>7</h2>
        <SettingsIcon color="#fff" />
      </div>
      <div>
        <h2>9</h2>
        <TransactionsIcon color="#fff" />
      </div>
      <div>
        <h2>10</h2>
        <UsersIcon color="#fff" />
      </div>
      <div>
        <h2>11</h2>
        <ArrowChekRight color="#fff" />
      </div>
      <div>
        <h2>12</h2>
        <CloseIcon color="#fff" />
      </div>
      <div>
        <h2>13</h2>
        <StatisticsIcon color="#fff" />
      </div>
      <h1>ЭТО ИКОНКИ ИЗ КОНТЕКСТНОГО МЕНЮ ИКОНОК ПК</h1>
      <div>
        <h2>1</h2>
        <DangerIcon color="#fff" />
      </div>
      <div>
        <h2>2</h2>
        <EditIcon color="#fff" />
      </div>
      <div>
        <h2>3</h2>
        <GuestIcon color="#fff" />
      </div>
      <div>
        <h2>4</h2>
        <ManagementIcon color="#fff" />
      </div>
      <div>
        <h2>5</h2>
        <OffIcon color="#fff" />
      </div>
    </>
  );
};

export default SandboxIcon;
