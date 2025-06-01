import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../components/SectionHeader';
import YieldGapInfoGraphic from '../components/YieldGapInfoGraphic';

const WhatIsYieldGap: React.FC = () => {
  useEffect(() => {
    document.title = "O que é Yield Gap no Algodão? | AlgodãoTech";
  }, []);

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24">
      <section className="section bg-primary-50">
        <div className="container-custom">
          <SectionHeader
            title="O que é Yield Gap no Algodão?"
            subtitle="Entenda a diferença entre o potencial produtivo e a realidade nas lavouras de algodão"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, x: -20 }}
              animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary-800">Compreendendo o Conceito</h3>
              <p className="mb-4 text-gray-700">
                O <strong>yield gap</strong> ou <strong>lacuna de produtividade</strong> é a diferença entre o que poderia ser produzido e o que é realmente produzido nas lavouras de algodão. Esta lacuna pode ser definida de diferentes formas, considerando diferentes níveis de produtividade:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700">
                <li><strong>Produtividade Potencial (PP):</strong> É o máximo rendimento teórico que poderia ser alcançado em condições ideais, sem limitações de água, nutrientes ou ocorrência de pragas e doenças.</li>
                <li><strong>Produtividade Atingível (PA):</strong> É o rendimento máximo que poderia ser alcançado com as melhores práticas de manejo disponíveis, considerando algumas limitações ambientais inevitáveis.</li>
                <li><strong>Produtividade Real (PR):</strong> É o rendimento que os agricultores realmente alcançam nas condições atuais de cultivo.</li>
              </ul>
              <p className="text-gray-700">
                A diferença entre PA e PR é frequentemente considerada o "yield gap" explorável, pois representa a produtividade que poderia ser alcançada com a adoção de práticas de manejo melhoradas.
              </p>
            </motion.div>

            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: 20 }}
              animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/7457/pexels-photo.jpg"
                alt="Campo de algodão"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <YieldGapInfoGraphic />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary-800">Por que o Yield Gap existe?</h3>
              <p className="mb-4 text-gray-700">
                O yield gap no algodão brasileiro pode ser atribuído a diversos fatores, que podem ser classificados em diferentes categorias:
              </p>
              
              <div className="bg-primary-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-primary-800 mb-2">Fatores Biofísicos</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Limitações climáticas (déficit hídrico, temperaturas extremas)</li>
                  <li>Características do solo (fertilidade, compactação)</li>
                  <li>Ocorrência de pragas, doenças e plantas daninhas</li>
                </ul>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-primary-800 mb-2">Fatores Tecnológicos</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Acesso limitado a variedades melhoradas</li>
                  <li>Práticas inadequadas de manejo</li>
                  <li>Baixo nível de mecanização e tecnologia</li>
                </ul>
              </div>
              
              <div className="bg-primary-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-primary-800 mb-2">Fatores Socioeconômicos</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Restrições de capital e acesso a crédito</li>
                  <li>Falta de conhecimento técnico</li>
                  <li>Infraestrutura deficiente (estradas, armazenamento)</li>
                  <li>Políticas públicas inadequadas</li>
                </ul>
              </div>
              
              <p className="mt-2 text-gray-700">
                Compreender esses fatores é essencial para desenvolver estratégias eficazes de redução do yield gap e aumento da produtividade do algodão no Brasil.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-50">
        <div className="container-custom">
          <SectionHeader
            title="Importância da Redução do Yield Gap"
            subtitle="Por que devemos nos preocupar em reduzir a lacuna de produtividade no algodão?"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Sustentabilidade Ambiental</h3>
              <p className="text-gray-700">
                Aumentar a produtividade nas áreas já cultivadas reduz a pressão para expandir a fronteira agrícola, protegendo biomas naturais e contribuindo para a conservação da biodiversidade e recursos naturais.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Viabilidade Econômica</h3>
              <p className="text-gray-700">
                Maior produtividade significa melhor aproveitamento dos recursos e insumos, resultando em maior rentabilidade para os produtores e fortalecimento da cadeia produtiva do algodão brasileiro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Competitividade Global</h3>
              <p className="text-gray-700">
                A redução do yield gap aumenta a competitividade do algodão brasileiro no mercado internacional, contribuindo para o fortalecimento da posição do Brasil como um dos principais produtores mundiais.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary-800">Uma analogia para entender melhor</h3>
            <p className="text-gray-700 mb-4">
              Pense no yield gap como a diferença entre a velocidade máxima que um carro pode atingir (produtividade potencial) e a velocidade média que ele realmente mantém em uma viagem (produtividade real). Diversos fatores podem reduzir essa velocidade: condições da estrada, habilidade do motorista, congestionamento, limitações do veículo, etc.
            </p>
            <p className="text-gray-700">
              Da mesma forma, o yield gap na produção de algodão é influenciado por múltiplos fatores que impedem que a lavoura atinja seu potencial máximo. Identificar e solucionar esses gargalos é como melhorar as condições da viagem para chegar mais rápido ao destino - ou, no caso do algodão, alcançar maior produtividade.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsYieldGap;