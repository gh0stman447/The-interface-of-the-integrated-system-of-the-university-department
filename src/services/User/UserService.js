import httpService from '../HttpService';
import ApiConfig from '../ApiConfig';

export const getUserList = async () => {
  return await httpService.get(ApiConfig.users);
};

export const postUser = async (data) => {
  return await httpService.post(ApiConfig.users, data);
};

export const deleteUser = async (id) => {
  const url = `${ApiConfig.users}/${id}`;
  return await httpService.delete(url);
};
