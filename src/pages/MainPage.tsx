import React from 'react';
import { usePosts } from '../hooks/usePosts';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const MainPage: React.FC = () => {

  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <p>Cargando posts...</p>;
  if (error) return <p>Error al cargar posts</p>;


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      <main className="max-w-6xl mx-auto flex-1 w-full p-4">
      {posts?.map((post) => (
      <article className="bg-white p-4 rounded shadow mb-4" key={post.id}>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">{post.title}</h2>
        <p className="text-sm text-gray-500 mb-2">
          Publicado por <strong>{post.author.name || post.author.email}</strong>
        </p>
        <p className="text-gray-700 mb-3">{post.content}</p>
        <a href="#" className="inline-block bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">Leer más</a>
      </article>
    ))}

        {/* Paginación */}
        <div className="flex gap-3 mt-4 text-gray-700 font-semibold">
          <a href="#" className="hover:underline">&laquo; Prev</a>
          <a href="#" className="hover:underline">Next &raquo;</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-3 mt-auto">
        <p>
          &copy; 2025 SadBlog.</p>
      </footer>
    </div>
  );
};

export default MainPage;