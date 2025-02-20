import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await loginMutation.mutateAsync({ email, password });
      localStorage.setItem('access_token', data.access_token);
      alert('Login exitoso');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Error al iniciar sesión');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold">MiBlog</div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/register" className="hover:underline">Register</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto flex-1 p-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-1">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
          >
            Iniciar Sesión
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-3">
        <p>&copy; 2025 SadBlog.</p>
      </footer>
    </div>
  );
};

export default LoginPage;