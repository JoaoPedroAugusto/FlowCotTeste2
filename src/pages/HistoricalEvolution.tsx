import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../components/SectionHeader';
import YieldGapChart from '../components/YieldGapChart';

const HistoricalEvolution: React.FC = () => {
  useEffect(() => {
    document.title = "Evolução Histórica do Yield Gap | AlgodãoTech";
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      year: '2000-2005',
      title: 'Expansão do Algodão no Cerrado',
      description: 'O início da expansão da cultura do algodão no Cerrado brasileiro, com a adaptação de variedades e sistema de produção específicos para a região.',
      achievement: 'Redução inicial do yield gap com adaptação de cultivares para o Cerrado.',
      color: 'bg-primary-600',
    },
    {
      year: '2006-2010',
      title: 'Adoção de Cultivares Transgênicas',
      description: 'Introdução de cultivares com tecnologias Bt e resistentes a herbicidas, alterando o manejo de pragas e plantas daninhas.',
      achievement: 'Melhor controle de pragas e redução de perdas, diminuindo o yield gap em cerca de 15%.',
      color: 'bg-primary-700',
    },
    {
      year: '2011-2015',
      title: 'Avanços em Agricultura de Precisão',
      description: 'Implementação de tecnologias de agricultura de precisão, incluindo mapeamento de solo, aplicação variável de insumos e monitoramento remoto.',
      achievement: 'Uso mais eficiente de insumos e manejo específico por local, reduzindo o yield gap em mais 10%.',
      color: 'bg-primary-800',
    },
    {
      year: '2016-2020',
      title: 'Intensificação Sustentável',
      description: 'Adoção de sistemas integrados de produção, rotação de culturas e práticas conservacionistas de manejo do solo.',
      achievement: 'Melhoria da saúde do solo e redução de estresses bióticos, contribuindo para diminuir o yield gap em mais 8%.',
      color: 'bg-primary-900',
    },
    {
      year: '2021-2025',
      title: 'Era Digital na Cotonicultura',
      description: 'Implementação de ferramentas digitais, inteligência artificial e internet das coisas (IoT) para monitoramento e tomada de decisão em tempo real.',
      achievement: 'Manejo mais preciso e responsivo, com potencial para reduzir o yield gap em mais 12% até 2025.',
      color: 'bg-primary-950',
    },
  ];

  return (
    <div className="pt-24">
      <section className="section bg-primary-50">
        <div className="container-custom">
          <SectionHeader
            title="Evolução Histórica (2000-2025)"
            subtitle="Acompanhe a trajetória e as transformações do yield gap na cotonicultura brasileira ao longo das últimas décadas"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary-800">Uma Jornada de Transformação</h3>
              <p className="mb-4 text-gray-700">
                Desde o ano 2000, a cotonicultura brasileira passou por profundas transformações tecnológicas, gerenciais e estruturais. Essas mudanças impactaram diretamente a produtividade das lavouras e, consequentemente, o yield gap do algodão no país.
              </p>
              <p className="mb-4 text-gray-700">
                O Brasil saiu da posição de importador para se tornar um dos maiores exportadores mundiais de algodão, com avanços significativos em produtividade. No entanto, apesar desses avanços, ainda existe um potencial considerável para redução do yield gap em diversas regiões produtoras.
              </p>
              <p className="text-gray-700">
                Nesta seção, exploramos os principais marcos dessa jornada, os fatores que influenciaram as mudanças na produtividade e as tendências para o futuro da cotonicultura brasileira.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3680313/pexels-photo-3680313.jpeg"
                alt="Evolução da agricultura do algodão"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </motion.div>
          </div>

          <YieldGapChart />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Linha do Tempo do Yield Gap no Algodão Brasileiro"
            subtitle="Principais marcos e avanços que contribuíram para a redução do yield gap no período de 2000 a 2025"
            centered
          />

          <div className="relative">
            {/* Timeline central line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex flex-col md:flex-row items-center md:justify-between mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Event content */}
                <div className="w-full md:w-5/12">
                  <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-primary-600 h-full">
                    <h3 className="text-xl font-semibold mb-2 text-primary-800">{event.title}</h3>
                    <div className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-full mb-3 mt-1 bg-primary-600">
                      {event.year}
                    </div>
                    <p className="text-gray-700 mb-3">{event.description}</p>
                    <div className="mt-3 p-3 bg-primary-50 rounded-md">
                      <p className="text-primary-800 font-medium">
                        <span className="font-bold">Conquista:</span> {event.achievement}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center dot for desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-600 border-4 border-white shadow"></div>

                {/* Empty space for alternating layout */}
                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary-50">
        <div className="container-custom">
          <SectionHeader
            title="Fatores Que Influenciaram a Evolução"
            subtitle="Compreenda os principais elementos que impactaram a produtividade do algodão brasileiro e o yield gap ao longo do tempo"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Avanços Tecnológicos</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Desenvolvimento de cultivares mais adaptadas e produtivas</li>
                <li>Adoção de biotecnologia (cultivares Bt e RR)</li>
                <li>Mecanização e automação de processos</li>
                <li>Agricultura de precisão e ferramentas digitais</li>
                <li>Sistemas de irrigação mais eficientes</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Fatores Econômicos</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Flutuações nos preços internacionais do algodão</li>
                <li>Políticas de crédito e financiamento agrícola</li>
                <li>Investimentos em pesquisa e desenvolvimento</li>
                <li>Formação de clusters produtivos</li>
                <li>Integração com mercados globais</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Mudanças Climáticas</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Alterações nos padrões de precipitação</li>
                <li>Aumento de temperaturas extremas</li>
                <li>Incidência de eventos climáticos severos</li>
                <li>Adaptação de sistemas de produção</li>
                <li>Desenvolvimento de variedades mais resistentes a estresses</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Práticas de Manejo</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Adoção do plantio direto e cobertura permanente do solo</li>
                <li>Manejo integrado de pragas e doenças</li>
                <li>Rotação e diversificação de culturas</li>
                <li>Manejo nutricional específico</li>
                <li>Adensamento de plantio</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Fatores Institucionais</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Programas de pesquisa em algodão (públicos e privados)</li>
                <li>Criação de associações de produtores</li>
                <li>Regulamentações ambientais e de uso de insumos</li>
                <li>Transferência de tecnologia e extensão rural</li>
                <li>Políticas setoriais específicas</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Desafios Fitossanitários</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Surgimento de novas pragas e doenças</li>
                <li>Desenvolvimento de resistência a defensivos</li>
                <li>Introdução de tecnologias Bt e manejo de resistência</li>
                <li>Sistemas de monitoramento e alerta</li>
                <li>Controle biológico e manejo integrado</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoricalEvolution;