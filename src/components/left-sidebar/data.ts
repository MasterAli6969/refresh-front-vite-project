import ControlPanelIcon from "../../assets/icons-svg-components/left-sidebar-icons/ControlPanelIcon";
import ShopIcon from "../../assets/icons-svg-components/left-sidebar-icons/ShopIcon";
import TransactionsIcon from "../../assets/icons-svg-components/left-sidebar-icons/TransactionsIcon";
import UsersIcon from "../../assets/icons-svg-components/left-sidebar-icons/UsersIcon";
import ReservationsIcon from "../../assets/icons-svg-components/left-sidebar-icons/ReservationsIcon";
import HistoryIcon from "../../assets/icons-svg-components/left-sidebar-icons/HistoryIcon";
import StatisticsIcon from "../../assets/icons-svg-components/left-sidebar-icons/StatisticsIcon";
import SettingsIcon from "../../assets/icons-svg-components/left-sidebar-icons/SettingsIcon";
import MessagesIcon from "../../assets/icons-svg-components/left-sidebar-icons/MessagesIcon";
import NotificationsIcons from "../../assets/icons-svg-components/left-sidebar-icons/NotificationsIcons";
import KnowledgeBaseIcon from "../../assets/icons-svg-components/left-sidebar-icons/KnowledgeBaseIcon";

export const leftSidebarData = [
  {
    id: 1,
    url: "#",
    icon: ControlPanelIcon,
    text: "Панель управления",
  },
  {
    id: 2,
    url: "shop",
    icon: ShopIcon,
    text: "Магазин",
  },
  {
    id: 3,
    url: "transactions",
    icon: TransactionsIcon,
    text: "Транзакции",
  },
  {
    id: 4,
    url: "#",
    icon: UsersIcon,
    text: "Пользователи",
  },
  {
    id: 5,
    url: "#",
    icon: ReservationsIcon,
    text: "Бронирования",
  },
  {
    id: 6,
    url: "#",
    icon: HistoryIcon,
    text: "История",
    dropMenuItem: [
      {
        id: 1,
        title: "Операции со складом",
        rightContextMenuItem: [
          {
            id: 1,
            url: "#",
            title: "Операции со складом 1",
          },
          {
            id: 2,
            url: "#",
            title: "Операции со складом 2",
          },
        ],
      },
      {
        id: 2,
        title: "Прочие операции",
        rightContextMenuItem: [
          {
            id: 1,
            url: "#",
            title: "Прочие операции 1",
          },
          {
            id: 2,
            url: "#",
            title: "Прочие операции 2",
          },
          {
            id: 3,
            url: "#",
            title: "Прочие операции3",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    url: "#",
    icon: StatisticsIcon,
    text: "Статистика",
  },
  {
    id: 8,
    url: "#",
    icon: SettingsIcon,
    text: "Настройки",
    dropMenuItem: [
      {
        id: 1,
        title: "Веб-администратор",
        rightContextMenuItem: [
          {
            id: 1,
            url: "#",
            title: "Общие настройки",
          },
          {
            id: 2,
            url: "#",
            title: "Конфигурация отчетов",
          },
          {
            id: 3,
            url: "#",
            title: "Конфигурация бронирования",
          },
          {
            id: 4,
            url: "#",
            title: "Склад",
          },
          {
            id: 5,
            url: "#",
            title: "Конфигурация кассы",
          },
          {
            id: 6,
            url: "#",
            title: "Сотрудники и роли",
          },
          {
            id: 7,
            url: "#",
            title: "Продукты и подписки",
          },
        ],
      },
      {
        id: 2,
        title: "Клиент",
        rightContextMenuItem: [
          {
            id: 1,
            url: "#",
            title: "Конфигурация клиента",
          },
          {
            id: 2,
            url: "#",
            title: "Дизайн",
          },
          {
            id: 3,
            url: "#",
            title: "Консоли",
          },
        ],
      },
      {
        id: 3,
        title: "Контент",
        rightContextMenuItem: [
          {
            id: 1,
            url: "#",
            title: "Игры и приложения",
          },
          {
            id: 2,
            url: "#",
            title: "Лицензии",
          },
        ],
      },
      {
        id: 4,
        title: "Лояльность",
        rightContextMenuItem: [
          {
            id: 1,
            url: "#",
            title: "Рейтинг участников",
          },
          {
            id: 2,
            url: "#",
            title: "Достижения",
          },
          {
            id: 3,
            url: "#",
            title: "Ежедневные награды",
          },
          {
            id: 4,
            url: "#",
            title: "Промокоды",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    url: "#",
    icon: MessagesIcon,
    text: "Сообщения",
  },
  {
    id: 10,
    url: "#",
    icon: NotificationsIcons,
    text: "Уведомления",
  },
  {
    id: 11,
    url: "#",
    icon: KnowledgeBaseIcon,
    text: "База знаний",
  },
];
