import { ChangeEvent } from "react";

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
  placeholder?: string;
  error?: boolean;
  name: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

// ЭТО ОБЩИЙ ИГНТЕРФЕЙС ДЛЯ ТИПИЗАЦИИ СОСТОЯНИЯ КЛЮЧЕЙ REDAX
export interface RedaxStateProps {
  redaxStateKey: string | number;
}

// ЭТО ОБЩИЙ ИНТЕРФЕЙС ДЛЯ БАЗОВЫХ ВХОДНЫХ ПАРАМЕТРОВ ПРИ СОЗДАНИИ ЛЮБОГО МОДАЛЬНОГО ОКНА ЧЕРЕЗ <CutomModalWindowUniversal>

export interface CutomModalWindowUniversalDefaultPropsType
  extends RedaxStateProps {
  title: string;
  specialText?: string;
}
