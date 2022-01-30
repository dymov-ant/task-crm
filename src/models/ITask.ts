export interface ITag {
  id: number;
  name: string;
}

export interface ILifetimeItem {
  id: number;
  userName: string;
  lifetimeType: number;
  createdAt: string;
  comment: string;
  fieldName: string | null;
  oldFieldValue: string | null;
  newFieldValue: string | null;
}

export interface ITask {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  price: number;
  taskTypeId: number;
  taskTypeName: string;
  statusId: number;
  statusName: string;
  statusRgb: string;
  priorityId: number;
  priorityName: string;
  serviceId: number;
  serviceName: string;
  resolutionDatePlan: string;
  tags: ITag[];
  initiatorId: number;
  initiatorName: string;
  executorId: number;
  executorName: string;
  executorGroupId: number;
  executorGroupName: string;
  lifetimeItems?: ILifetimeItem[];
}
