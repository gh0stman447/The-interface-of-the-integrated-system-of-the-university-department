import httpService from '../HttpService';
import ApiConfig from '../ApiConfig';

export const getModuleListApi = async () => {
  return await httpService.get(ApiConfig.modules);
};

export const postModuleApi = async (data) => {
  return await httpService.post(ApiConfig.modules, data);
};

export const deleteModuleApi = async (id) => {
  const url = `${ApiConfig.modules}/${id}`;
  await httpService.delete(url);
};

export const putModuleApi = async (id, data) => {
  const url = `${ApiConfig.modules}/${id}`;
  await httpService.put(url, data);
};
