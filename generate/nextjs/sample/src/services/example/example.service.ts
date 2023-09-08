import { apiService } from '@services/api/api.service';

enum EXAMPLE_ENDPOINT {
  LIST = '/example',
  CREATE = '/example/create',
  DETAIL = '/example/detail/:id',
  EDIT = '/example/edit/:id',
  DELETE = '/example/delete/:id'
}

export const exampleService = {
  list: async (): Promise<unknown> => {
    const res = await apiService.get(EXAMPLE_ENDPOINT.LIST);
    return res.data;
  },

  create: async (data: unknown): Promise<unknown> => {
    const res = await apiService.post(EXAMPLE_ENDPOINT.CREATE, data);
    return res.data;
  },

  detail: async (id: string): Promise<unknown> => {
    const res = await apiService.get(EXAMPLE_ENDPOINT.DETAIL.replace(':id', id));
    return res.data;
  },

  edit: async (data: unknown, id: string): Promise<unknown> => {
    const res = await apiService.put(EXAMPLE_ENDPOINT.EDIT.replace(':id', id), data);
    return res.data;
  },

  delete: async (id: string): Promise<unknown> => {
    const res = await apiService.delete(EXAMPLE_ENDPOINT.DELETE.replace(':id', id));
    return res.data;
  }
};
