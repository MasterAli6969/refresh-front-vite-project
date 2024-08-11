import IconMonitor from "../../assets/icons-svg-components/IconMonitor";
import IconStore from "../../assets/icons-svg-components/IconStore";
import Iconlighting from "../../assets/icons-svg-components/Iconlighting";
import IconCube from "../../assets/icons-svg-components/IconCube";
import IconUserGroup from "../../assets/icons-svg-components/IconUserGroup";
import IconCalendarPlus from "../../assets/icons-svg-components/IconCalendarPlus";
import IconLoader from "../../assets/icons-svg-components/IconLoader";
import IconLineChart from "../../assets/icons-svg-components/IconLineChart";
import IconNut from "../../assets/icons-svg-components/IconNut";

export const leftSidebarData = [
  {
    id: 1,
    url: "#",
    icon: IconMonitor,
    text: "Панель управления ПК",
  },
  {
    id: 2,
    url: "shop",
    icon: IconStore,
    text: "Магазин",
  },
  {
    id: 3,
    url: "#",
    icon: Iconlighting,
    text: "Заказы и транзакции",
  },
  {
    id: 4,
    url: "#",
    icon: IconCube,
    text: "Склад",
  },
  {
    id: 5,
    url: "#",
    icon: IconUserGroup,
    text: "Пользователи",
  },
  {
    id: 6,
    url: "#",
    icon: IconCalendarPlus,
    text: "Бронирования",
  },
  {
    id: 7,
    url: "#",
    icon: IconLoader,
    text: "История",
  },
  {
    id: 8,
    url: "#",
    icon: IconLineChart,
    text: "Статистика",
  },
  {
    id: 9,
    url: "#",
    icon: IconNut,
    text: "Настройки",
  },
];

export const leftDropListStaticData = [
  {
    id: 1,
    url: "#",
    title: "Инвентаризация",
  },
  {
    id: 2,
    url: "#",
    title: "Прочие операции",
  },
];

export const leftDropListDropData = [
  {
    id: 1,
    title: "Веб-администратор",
    customListDropItem: [
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
    ],
  },
  {
    id: 2,
    title: "Клиент",
    customListDropItem: [
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
    title: "Операции с контентом",
    customListDropItem: [
      {
        id: 1,
        url: "#",
        title: "Игры и приложения",
      },
      {
        id: 2,
        url: "#",
        title: "Акканты центра",
      },
    ],
  },
  {
    id: 4,
    title: "Системы лояльности",
    customListDropItem: [
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
    ],
  },
  {
    id: 5,
    url: "#",
    title: "Сотрудники и роли",
  },
  {
    id: 6,
    url: "#",
    title: "Касса",
  },
  {
    id: 7,
    url: "#",
    title: "Продукты и подписки",
  },
];
