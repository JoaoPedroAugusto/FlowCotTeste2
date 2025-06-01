import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-6">Página não encontrada</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn btn-primary flex items-center gap-2">
            <Home size={18} />
            Página Inicial
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-outline flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

