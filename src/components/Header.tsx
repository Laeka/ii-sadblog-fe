import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <header className="bg-gray-800 text-white flex items-center justify-between px-4 py-3">
      <div className="text-xl font-bold">
        <Link to="/">MiBlog</Link>
      </div>
      <nav>
        <ul className="flex gap-4">
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/create-post" className="hover:underline">Crear Post</Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:underline focus:outline-none"
                >
                  Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/register" className="hover:underline">Register</Link>
              </li>
              <li>
                <Link to="/login" className="hover:underline">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;