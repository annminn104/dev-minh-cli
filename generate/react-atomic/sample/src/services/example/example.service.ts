import { apiService } from '~/services/common/api.service';

enum EXAMPLE_ENDPOINT {
  LIST = 'example-list',
  DETAIL = 'example-detail/:id',
  EDIT = 'example-edit/:id',
  DELETE = 'example-delete/:id'
}

export const exampleService = {
  list: async (): Promise<unknown> => {
    const res = await apiService.get(EXAMPLE_ENDPOINT.LIST);
    return res.data;
  },

  detail: async (): Promise<unknown> => {
    const res = await apiService.get(EXAMPLE_ENDPOINT.DETAIL);
    return res.data;
  },

  edit: async (): Promise<unknown> => {
    const res = await apiService.get(EXAMPLE_ENDPOINT.EDIT);
    return res.data;
  },

  delete: async (): Promise<unknown> => {
    const res = await apiService.get(EXAMPLE_ENDPOINT.DELETE);
    return res.data;
  }
};
