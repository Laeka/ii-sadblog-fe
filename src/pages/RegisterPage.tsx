import React, { useState } from 'react';
import { useRegister } from '../hooks/useRegister';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const registerMutation = useRegister();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await registerMutation.mutateAsync({ email, name, password });
      alert(`Usuario registrado exitosamente: ID ${data.id}`);
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Error al registrar el usuario');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold">SadBlog</div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/login" className="hover:underline">Login</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto flex-1 p-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Registro</h2>
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
            <label htmlFor="name" className="block text-gray-600 mb-1">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
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
            Registrarse
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

export default RegisterPage;