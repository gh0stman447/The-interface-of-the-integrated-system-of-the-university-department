import httpService from '../HttpService';
import ApiConfig from '../ApiConfig';

export const getUserListApi = async () => {
  return await httpService.get(ApiConfig.users);
};

export const postUserApi = async (data) => {
  return await httpService.post(ApiConfig.users, data);
};

export const deleteUserApi = async (id) => {
  const url = `${ApiConfig.users}/${id}`;
  await httpService.delete(url);
};

export const putUserApi = async (id, data) => {
  const url = `${ApiConfig.users}/${id}`;
  await httpService.put(url, data);
};
