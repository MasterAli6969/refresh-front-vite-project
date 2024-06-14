import { PcIconModalWindowDataType } from "./pc-icon-components/pc-modal-modal-window/pcModalWindow.interface";

// Тип для объекта внутри pcIconData
export interface PcIconDataObjektType {
  status: string;
  pcNumber: number;
  timeLeftPcent: number;
  pcIconModalWindowData: PcIconModalWindowDataType;
}

// Тип для основного массива данных
export interface PcIconDataType {
  id: number;
  pcIconDataObjekt: PcIconDataObjektType;
}

export interface PcIconPropsType {
  pcIconDataObjekt: PcIconDataObjektType;
}
