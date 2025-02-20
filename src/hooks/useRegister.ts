import { useMutation } from '@tanstack/react-query';
import axiosClient from '../api/axiosClient';

export interface RegisterPayload {
  email: string;
  name?: string;
  password: string;
}

export interface RegisterResponse {
  id: number;
  email: string;
  name: string | null;
}

const register = async (payload: RegisterPayload): Promise<RegisterResponse> => {
  const response = await axiosClient.post<RegisterResponse>('/users', payload);
  return response.data;
};

export const useRegister = () => {
  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn: register,
  });
};