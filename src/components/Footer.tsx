import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300"> {/* Adjusted base text color for better contrast */}
      <div className="container-custom py-12 md:py-16"> {/* Increased padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"> {/* Increased gap */}
          {/* Coluna 1: Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf size={24} className="text-primary-400" />
              {/* Changed name to FlowCot to match Navbar */}
              <span className="text-xl font-semibold text-white">FlowCot</span> 
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed"> {/* Adjusted margin and leading */}
              Disseminando conhecimento e oferecendo soluções para a redução do yield gap na cotonicultura brasileira.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" aria-label="Instagram" className="hover:text-primary-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-primary-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Principal */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 uppercase tracking-wider">Navegação</h3> {/* Adjusted style */}
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Início</Link></li>
              <li><Link to="/what-is-yield-gap" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">O que é Yield Gap</Link></li>
              <li><Link to="/historical-evolution" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Evolução Histórica</Link></li>
              <li><Link to="/tools-for-yield-gap" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Ferramentas</Link></li>
              <li><Link to="/solve-yield-gap" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Soluções</Link></li>
              <li><Link to="/mapa" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Mapa Dinâmico</Link></li> {/* Added Mapa link */} 
            </ul>
          </div>

          {/* Coluna 3: Recursos Adicionais */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 uppercase tracking-wider">Recursos</h3> {/* Adjusted style */}
            <ul className="space-y-2">
              <li><Link to="/minecraft-yield-gap" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Minecraft e o Yield Gap</Link></li>
              <li><Link to="/steps-to-avoid" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Passos Práticos</Link></li>
              <li><Link to="/about-us" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Sobre Nós</Link></li> {/* Moved Sobre Nós here */} 
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 uppercase tracking-wider">Contato</h3> {/* Adjusted style */}
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center text-sm">
                <Mail size={16} className="mr-2 flex-shrink-0" /> {/* Adjusted icon size */}
                <a href="mailto:contato@flowcot.com.br" className="hover:text-primary-400 transition-colors break-all"> {/* Changed email domain, added break-all */}
                  contato@flowcot.com.br
                </a>
              </p>
              {/* Add Address or Phone if available */}
              {/* <p className="flex items-center text-sm">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span>Endereço Fictício, 123, Cidade, BR</span>
              </p> */}
            </div>
            {/* Removed the separate About Us button as it's now in Resources list */}
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-xs"> {/* Adjusted spacing, color, size */}
          <p>&copy; {new Date().getFullYear()} FlowCot. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

