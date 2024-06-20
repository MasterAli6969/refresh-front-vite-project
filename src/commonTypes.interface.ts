//ЭТО ИНТЕРЕФЕЙС ОБЩЕГО ПОЛЬЗОВАНИЯ БЛЯ ОПИСАНИЯ РАБОТЫ СПИСКА ССЫЛОК
export interface ListLinkType {
  id: number;
  url: string;
  icon?: string;
  title: string;
}

// ЭТО ОБЩИЙ ИГНТЕРФЕЙС ДЛЯ INPUT ПОЛЕЙ В ФОРМЕ АВТАРИЗАЦИИ

export interface AuthInputPropsType {
  label: string;
  error: boolean;
  name: "pass" | "mail" | "repeatPass";
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
