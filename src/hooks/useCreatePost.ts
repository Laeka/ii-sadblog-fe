import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosClient from '../api/axiosClient';

export interface CreatePostPayload {
  title: string;
  content?: string;
  published?: boolean;
  authorId: number;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  author: {
    id: number;
    name: string;
    email: string;
  };
}

const createPost = async (payload: CreatePostPayload): Promise<Post> => {
  const response = await axiosClient.post<Post>('/posts', payload);
  return response.data;
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation<Post, Error, CreatePostPayload>({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
  });
};