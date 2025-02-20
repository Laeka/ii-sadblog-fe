import React, { useState } from 'react';
import { useCreatePost } from '../hooks/useCreatePost';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const CreatePostPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const createPostMutation = useCreatePost();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const authorId = 1;
      await createPostMutation.mutateAsync({ title, content, published, authorId });
      alert('Post creado exitosamente');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Error al crear el post');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-md mx-auto flex-1 p-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Crear Post</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-600 mb-1">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-600 mb-1">Contenido</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="published"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="published" className="text-gray-600">Publicado</label>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
          >
            Crear Post
          </button>
        </form>
      </main>
      <footer className="bg-gray-800 text-white text-center py-3">
        <p>&copy; 2025 SadBlog.</p>
      </footer>
    </div>
  );
};

export default CreatePostPage;;