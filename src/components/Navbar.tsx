import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const navItems = [
  { name: 'Início', path: '/' },
  { name: 'O que é Yield Gap', path: '/what-is-yield-gap' },
  { name: 'Evolução Histórica', path: '/historical-evolution' },
  { name: 'Ferramentas', path: '/tools-for-yield-gap' },
  { name: 'Soluções', path: '/solve-yield-gap' },
  { name: 'Mapa', path: '/mapa' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fecha o menu mobile ao navegar para outra página
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${scrolled || isOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-4' // Ajuste no padding e fundo ao rolar ou abrir menu
        }`}
    >
      {/* Usando container-custom para consistência */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-16"> {/* Altura fixa para consistência */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0"> {/* Evita que o logo encolha */}
            <Leaf size={28} className="text-primary-600" />
            <span className="text-xl font-semibold text-primary-800">FlowCot</span>
          </Link>

          {/* Desktop Navigation - Oculto em telas menores que lg */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-1 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${location.pathname === item.path
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-800 hover:text-primary-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button - Visível apenas em telas menores que lg */}
          <div className="lg:hidden">
            <button
              className="text-gray-700 focus:outline-none p-2" // Adicionado padding para área de toque maior
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu" // Melhor acessibilidade
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Transição suave e posicionamento melhorado */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0' // Animação de altura e opacidade
            }`}
        >
          <div className="bg-white pt-2 pb-4 px-4 space-y-2"> {/* Ajuste no padding e espaçamento */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out ${location.pathname === item.path
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

