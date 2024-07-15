import UserMiniIcon from "../../../assets/icons/UserMiniIcon.svg";
import LoaderMiniIcon from "../../../assets/icons/LoaderMiniIcon.svg";
import RemoteSvgrepoMini from "../../../assets/icons/RemoteSvgrepoMini.svg";
import CornersOutMiniIcons from "../../../assets/icons/CornersOutMiniIcons.svg";
import WindowsLogoMiniIcons from "../../../assets/icons/WindowsLogoMiniIcons.svg";
import WrenchMiniIcons from "../../../assets/icons/WrenchMiniIcons.svg";
import ListMiniIcons from "../../../assets/icons/ListMiniIcons.svg";
import PencilSimpleMiniIcons from "../../../assets/icons/PencilSimpleMiniIcons.svg";
import SimplerebootSvgrepoMiniIcons from "../../../assets/icons/SimplerebootSvgrepoMiniIcons.svg";
import PowerMiniIcons from "../../../assets/icons/PowerMiniIcons.svg";

const modalListItem = [
  {
    id: 1,
    icon: UserMiniIcon,
    url: "#",
    title: "Гостевой сеанс",
  },
  {
    id: 2,
    icon: LoaderMiniIcon,
    url: "#",
    title: "История событий",
  },
  {
    id: 3,
    icon: RemoteSvgrepoMini,
    url: "#",
    title: "Удаленный доступ",
  },
  {
    id: 4,
    icon: CornersOutMiniIcons,
    url: "#",
    title: "Скриншот",
  },
  {
    id: 5,
    icon: WindowsLogoMiniIcons,
    url: "#",
    title: "Режим администратора",
  },
  {
    id: 6,
    icon: WrenchMiniIcons,
    url: "#",
    title: "Неисправность",
  },
  {
    id: 7,
    icon: ListMiniIcons,
    url: "#",
    title: "Диспетчер задач",
  },
  {
    id: 8,
    icon: PencilSimpleMiniIcons,
    url: "#",
    title: "Редактирование",
  },
  {
    id: 9,
    icon: SimplerebootSvgrepoMiniIcons,
    url: "#",
    title: "Перезагрузка",
  },
  {
    id: 10,
    icon: PowerMiniIcons,
    url: "#",
    title: "Выключение",
  },
];

export const pcIconData = [
  {
    id: 1,
    pcIconDataObjekt: {
      status: "Active",
      pcNumber: 20,
      timeLeftPcent: 30,
      pcIconModalWindowData: {
        dropData: {
          client: "gg. August",
          timeLeft: "4:38",
          dropDataItem: [
            {
              id: 1,
              url: "#",
              title: "Пополнение",
            },
            {
              id: 2,
              url: "#",
              title: "Штраф",
            },
            {
              id: 3,
              url: "#",
              title: "Отправить сообщение",
            },
            {
              id: 4,
              url: "#",
              title: "Отправить уведомление",
            },
            {
              id: 5,
              url: "#",
              title: "Сменить место",
            },
            {
              id: 6,
              url: "#",
              title: "Выйти из сессии",
            },
            {
              id: 7,
              url: "#",
              title: "История тарифов",
            },
            {
              id: 8,
              url: "#",
              title: "История операций",
            },
            {
              id: 9,
              url: "#",
              title: "История транзакций",
            },
          ],
        },
        modalListItem: modalListItem,
      },
    },
  },
  {
    id: 2,
    pcIconDataObjekt: {
      status: "Included",
      pcNumber: 23,
      timeLeftPcent: 40,
      pcIconModalWindowData: {
        modalListItem: modalListItem,
      },
    },
  },
  {
    id: 3,
    pcIconDataObjekt: {
      status: "Servicing",
      pcNumber: 25,
      timeLeftPcent: 100,
      pcIconModalWindowData: {
        modalListItem: modalListItem,
      },
    },
  },
  {
    id: 4,
    pcIconDataObjekt: {
      status: "No Active",
      pcNumber: 1,
      timeLeftPcent: 80,
      pcIconModalWindowData: {
        modalListItem: modalListItem,
      },
    },
  },
];
