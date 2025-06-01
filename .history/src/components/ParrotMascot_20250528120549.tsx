// src/components/ParrotMascot.tsx

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player'; // Certifique-se que está importado
import { Send, X } from 'lucide-react';

interface ParrotMascotProps {
  position?: 'left' | 'right';
  message?: string;
}

interface Message {
  text: string;
  type: 'user' | 'bot';
}

const ParrotMascot: React.FC<ParrotMascotProps> = ({ position = 'right' }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const playerRef = useRef<Player>(null);
  // Adicione uma nova referência para o lottie player do botão fechado, se quiser controlar separadamente
  const closedPlayerRef = useRef<Player>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Olá! Eu sou o Algodinho, especialista em algodão e yield gap! Como posso ajudar?', type: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
    // Garantir que os players de Lottie comecem a tocar
    playerRef.current?.play();
    closedPlayerRef.current?.play(); // Garante que o player do botão fechado toque
  }, [controls]);

  const getResponse = async (question: string): Promise<string> => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate typing
    setIsTyping(false);

    const normalizedQuestion = question.toLowerCase();

    if (normalizedQuestion.includes('yield gap')) {
      return 'O yield gap é a diferença entre a produtividade potencial que poderia ser alcançada e a produtividade real obtida nas fazendas. Trabalho para ajudar os produtores a reduzirem essa diferença!';
    }

    if (normalizedQuestion.includes('algodão') && normalizedQuestion.includes('produção')) {
      return 'O Brasil é um dos maiores produtores mundiais de algodão! Nossos principais estados produtores são Mato Grosso e Bahia. A produção sustentável e eficiente é fundamental para o setor.';
    }

    if (normalizedQuestion.includes('pragas') || normalizedQuestion.includes('doenças')) {
      return 'O manejo integrado de pragas (MIP) é essencial na cultura do algodão. As principais pragas incluem o bicudo-do-algodoeiro, lagartas e percevejos. É importante fazer monitoramento constante!';
    }

    if (normalizedQuestion.includes('irrigação')) {
      return 'A irrigação adequada é fundamental para reduzir o yield gap. Recomendo o uso de sistemas eficientes como gotejamento ou pivô central, sempre monitorando a necessidade hídrica da cultura.';
    }

    if (normalizedQuestion.includes('solo')) {
      return 'O manejo do solo é crucial! Recomendo análises regulares, correção adequada e práticas conservacionistas como plantio direto e rotação de culturas.';
    }

    if (normalizedQuestion.includes('tecnologia') || normalizedQuestion.includes('digital')) {
      return 'A agricultura digital tem um papel importante na redução do yield gap! Uso de drones, sensores, GPS e softwares de gestão podem ajudar muito na tomada de decisão.';
    }

    return 'Posso ajudar com informações sobre yield gap, produção de algodão, manejo de pragas e doenças, irrigação, solo e tecnologias! O que você gostaria de saber?';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, type: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    const response = await getResponse(input);
    const botResponse = { text: response, type: 'bot' as const };
    setMessages(prev => [...prev, botResponse]);
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className={`fixed z-50 ${position === 'right' ? 'right-4' : 'left-4'} bottom-4 flex items-end gap-4 ${position === 'left' ? 'flex-row-reverse' : ''}`}
    >
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-2xl w-96 max-w-sm overflow-hidden border border-primary-100"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-1 shadow-lg">
                <Player
                  ref={playerRef}
                  autoplay={true}
                  loop={true}
                  src="https://lottie.host/32e8bfad-98f6-4386-9e7e-f9717eb5a515/xO1bQzxXnI.json"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <h3 className="text-white font-medium">Algodinho</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-primary-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div
            ref={chatRef}
            className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-primary-50/30 to-transparent"
          >
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-primary-600 text-white rounded-tr-none'
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-2 px-4 py-2 bg-gray-100 rounded-full w-20"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                  className="w-2 h-2 bg-primary-600 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 bg-primary-600 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 bg-primary-600 rounded-full"
                />
              </motion.div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua pergunta..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 rounded-2xl shadow-lg max-w-xs cursor-pointer flex items-center gap-3 border border-primary-100"
          onClick={() => setIsOpen(true)}
        >
          <div className="w-12 h-12 rounded-full bg-primary-50 p-1">
            {/* === AQUI É ONDE VAMOS COLOCAR A ANIMAÇÃO === */}
            <Player
              ref={closedPlayerRef} // Use a nova referência, se quiser controlar separadamente
              autoplay={true}
              loop={true}
              // Você pode usar o mesmo Lottie JSON ou encontrar um diferente aqui
              src="data:image/webp;base64,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"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          {/*
            A imagem que você enviou mostra "Olá! Posso ajudar? 🌱".
            Para replicar isso, você pode remover o <p> e adicionar um <span> com a imagem/ícone.
            Ou manter o <p> e adicionar um ícone, se for um ícone fixo.
            Se a imagem for um ícone Lottie, você pode colocá-la aqui.
            Mas pelo que entendi, você quer uma animação na bolinha.
          */}
          <p className="text-gray-800 font-medium">Olá! Posso ajudar? 🌱</p>
          <div className={`absolute ${position === 'right' ? '-right-2' : '-left-2'} top-1/2 -translate-y-1/2 w-4 h-4 bg-white transform rotate-45 border-r border-b border-primary-100`} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ParrotMascot;