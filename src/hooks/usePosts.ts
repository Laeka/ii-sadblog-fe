import { useQuery } from '@tanstack/react-query';
import axiosClient from '../api/axiosClient';

export interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  author: {
    id: number;
    email: string;
    name: string;
  };
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axiosClient.get<Post[]>('/posts');
  return response.data;
};

export const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })
};