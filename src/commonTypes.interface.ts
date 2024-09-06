//ЭТО ИНТЕРЕФЕЙС ОБЩЕГО ПОЛЬЗОВАНИЯ БЛЯ ОПИСАНИЯ РАБОТЫ СПИСКА ССЫЛОК и доп меню
export interface ListType {
  id: number;
  url?: string;
  title: string;
  contextMenuItem?: ListType[];
}

// ЭТО ОБЩИЙ ИГНТЕРФЕЙС ДЛЯ INPUT ПОЛЕЙ В ФОРМЕ АВТАРИЗАЦИИ

export interface AuthInputPropsType {
  label: string;
  error?: boolean;
  name: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// ЭТО ОБЩИЙ ИГНТЕРФЕЙС ДЛЯ ТИПИЗАЦИИ СОСТОЯНИЯ КЛЮЧЕЙ REDAX
export interface RedaxStateProps {
  redaxStateKey: string | number;
}
