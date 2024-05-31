export interface TaskItemData {
  id: number;
  avatar: string;
  online: boolean;
  name: string;
}

export interface TaskBlockDataTypes {
  id: number;
  date: string;
  taskItemData: TaskItemData[];
}

export interface TaskBlockDataPropsTypes {
  taskBlockData: TaskBlockDataTypes[];
}
