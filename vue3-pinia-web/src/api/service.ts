import api from './client';

export const getExample = async <T>(endpoint: string) => {
  const response = await api.get<T>(endpoint);
  return response.data;
};

export const postExample = async <T>(endpoint: string, payload: unknown) => {
  const response = await api.post<T>(endpoint, payload);
  return response.data;
};

export const putExample = async <T>(endpoint: string, payload: unknown) => {
  const response = await api.put<T>(endpoint, payload);
  return response.data;
};

export const deleteExample = async <T>(endpoint: string) => {
  const response = await api.delete<T>(endpoint);
  return response.data;
};
