import UserIcon from "../../assets/icons/UserIcon.svg";
import CalendarIcon from "../../assets/icons/CalendarIcon.svg";
import SignOutIcon from "../../assets/icons/SignOutIcon.svg";

export const userPanelData = {
  id: 1,
  avatar: "AL",
  name: "Алексей Лариков",
  dropData: {
    shiftData: {
      generalSales: "3343",
      cash: "3343",
      bankCard: "3343",
      refunds: "3343",
    },
    dropListItem: [
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
        url: "authorization ",
        icon: SignOutIcon,
        text: "Выход из CRM",
      },
    ],
  },
};

export const messageOutgoingEmployeesData = {
  id: 1,
  name: "Захар Ртищев",
  time: "22:13",
  message:
    "Паста - производное от копипаст, copypaste, copy and paste, что означает копирование и вставка текста.",
};

export const dialogData = [
  {
    id: 1,
    name: "PC12",
    time: "22:13",
    online: true,
    lastMessage: "Паста - производное от копипаст, copypaste",
  },
  {
    id: 2,
    name: "PC12",
    time: "22:13",
    online: false,
    lastMessage: "Паста - производное от копипаст, copypaste",
  },
  {
    id: 3,
    name: "PC12",
    time: "22:13",
    online: true,
    lastMessage: "Паста - производное от копипаст, copypaste",
  },
];

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
