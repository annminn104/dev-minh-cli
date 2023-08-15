export interface IPagination {
  page: number;
  size: number;
  total?: number;
  sizeOptions?: number[];
}

export type IPaginationRequest = Pick<IPagination, 'page' | 'size'>;

type IOrder = 'desc' | 'asc';

export interface ISort {
  orderBy: string;
  order: IOrder;
}

export type IPaginationResult = Pick<IPagination, 'total'>;

export interface IPaginationResponse<T> {
  pagination: IPaginationResult;
  results: T;
}
