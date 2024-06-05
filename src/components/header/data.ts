import UserIcon from "../../assets/icons/UserIcon.svg";
import CalendarIcon from "../../assets/icons/CalendarIcon.svg";
import SignOutIcon from "../../assets/icons/SignOutIcon.svg";

export const userPanelData = {
  id: 1,
  avatar: "AL",
  name: "Алексей Лариков",
  position: "Управляющий",
  dropData: [
    {
      id: 1,
      url: "#",
      icon: UserIcon,
      text: "Мой профиль",
    },
    {
      id: 2,
      url: "#",
      icon: CalendarIcon,
      text: "Календарь смен",
    },
    {
      id: 3,
      url: "#",
      icon: SignOutIcon,
      text: "Выход из CRM",
    },
  ],
};

export const NoticeButtonData = [
  {
    id: 1,
    name: "PC13",
    time: "22:13",
    title: "Новый заказ",
    noticeItem: [
      {
        id: 1,
        title: "Товар",
        content: "",
      },
      {
        id: 2,
        title: "Количество",
        content: "",
      },
      {
        id: 3,
        title: "Способ доставки",
        content: "",
      },
      {
        id: 4,
        title: "Комментарий",
        content: "",
      },
    ],
  },
  {
    id: 1,
    name: "PC13",
    time: "22:13",
    title: "Новый запрос о помощи!",
    noticeItem: [],
  },
];
