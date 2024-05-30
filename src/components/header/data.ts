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
