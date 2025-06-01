import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../components/SectionHeader';
import { ArrowRightCircle, Droplet, Scaling as Seedling, Bug, Cpu, Video, ShieldCheck, ArrowRight, BarChart2 } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  impactLevel: 'high' | 'medium' | 'low';
  implementationLevel: 'easy' | 'medium' | 'complex';
  delay?: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ 
  title, 
  description, 
  icon, 
  impactLevel, 
  implementationLevel,
  delay = 0 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getImpactColor = () => {
    switch (impactLevel) {
      case 'high': return 'bg-success-500';
      case 'medium': return 'bg-accent-500';
      case 'low': return 'bg-warning-500';
      default: return 'bg-gray-500';
    }
  };

  const getImplementationColor = () => {
    switch (implementationLevel) {
      case 'easy': return 'bg-success-500';
      case 'medium': return 'bg-accent-500';
      case 'complex': return 'bg-warning-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="card hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-primary-50 rounded-full mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-primary-800">{title}</h3>
        </div>
        
        <p className="text-gray-700 mb-6 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-600 mr-2">Impacto:</span>
              <span className={`px-2 py-1 rounded-full text-white text-xs font-medium ${getImpactColor()}`}>
                {impactLevel === 'high' ? 'Alto' : impactLevel === 'medium' ? 'Médio' : 'Baixo'}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-600 mr-2">Implementação:</span>
              <span className={`px-2 py-1 rounded-full text-white text-xs font-medium ${getImplementationColor()}`}>
                {implementationLevel === 'easy' ? 'Fácil' : implementationLevel === 'medium' ? 'Média' : 'Complexa'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudyCard: React.FC<{ 
  title: string; 
  location: string; 
  result: string; 
  description: string;
  image: string;
  delay?: number;
}> = ({ title, location, result, description, image, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-200">{location}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-primary-50 text-primary-800 font-semibold px-3 py-1 rounded-full text-sm inline-block mb-3">
          Resultado: {result}
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

const SolveYieldGap: React.FC = () => {
  useEffect(() => {
    document.title = "Soluções para o Yield Gap | AlgodãoTech";
  }, []);

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24">
      <section className="section bg-primary-50">
        <div className="container-custom">
          <SectionHeader
            title="Soluções para o Yield Gap"
            subtitle="Estratégias e práticas eficazes para reduzir a lacuna de produtividade no algodão brasileiro"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, x: -20 }}
              animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary-800">Transformando Potencial em Realidade</h3>
              <p className="mb-4 text-gray-700">
                Reduzir o yield gap na cotonicultura brasileira não é apenas uma questão de adotar novas tecnologias, mas sim de implementar um conjunto integrado de práticas e estratégias adaptadas às condições específicas de cada região produtora.
              </p>
              <p className="mb-4 text-gray-700">
                Nesta seção, apresentamos soluções práticas, baseadas em evidências científicas e experiências bem-sucedidas, que podem ajudar produtores a diminuir a diferença entre a produtividade atingível e a produtividade real em suas lavouras de algodão.
              </p>
              <p className="text-gray-700">
                O caminho para a redução do yield gap passa por quatro pilares fundamentais: manejo adequado do solo, irrigação eficiente, controle integrado de pragas e doenças, e adoção estratégica de tecnologias. Juntos, esses pilares formam a base para uma cotonicultura mais produtiva e sustentável.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg"
                alt="Lavoura de algodão de alta produtividade"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Soluções por Categoria"
            subtitle="Conheça as principais estratégias para reduzir o yield gap de acordo com diferentes áreas de manejo"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <SolutionCard
              title="Manejo Adequado do Solo"
              description="Implementação de práticas de plantio direto, rotação de culturas e cobertura permanente do solo, combinadas com análises regulares de solo e aplicação precisa de corretivos e fertilizantes."
              icon={<Seedling size={24} className="text-primary-600" />}
              impactLevel="high"
              implementationLevel="medium"
              delay={0}
            />
            <SolutionCard
              title="Irrigação Eficiente"
              description="Uso de sistemas de irrigação de precisão, com monitoramento contínuo da umidade do solo e da demanda hídrica da cultura, permitindo aplicações de água no momento certo e na quantidade adequada."
              icon={<Droplet size={24} className="text-primary-600" />}
              impactLevel="high"
              implementationLevel="complex"
              delay={1}
            />
            <SolutionCard
              title="Controle Integrado de Pragas e Doenças"
              description="Adoção do Manejo Integrado de Pragas (MIP), combinando monitoramento constante, controle biológico, uso racional de defensivos e manejo cultural para reduzir perdas por fatores bióticos."
              icon={<Bug size={24} className="text-primary-600" />}
              impactLevel="medium"
              implementationLevel="medium"
              delay={2}
            />
            <SolutionCard
              title="Adoção Estratégica de Tecnologias"
              description="Integração de agricultura de precisão, cultivares melhoradas, automação de processos e ferramentas digitais de suporte à decisão, implementadas de forma gradual e adaptada à realidade de cada produtor."
              icon={<Cpu size={24} className="text-primary-600" />}
              impactLevel="high"
              implementationLevel="complex"
              delay={3}
            />
          </div>

          <div className="bg-primary-50 rounded-xl p-6 md:p-8 shadow-md">
            <div className="flex items-center mb-6">
              <ShieldCheck size={28} className="text-primary-600 mr-3" />
              <h3 className="text-xl md:text-2xl font-semibold text-primary-800">Abordagem Integrada: A Chave do Sucesso</h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              A experiência tem mostrado que a maior redução do yield gap é obtida quando as soluções são implementadas de forma integrada, considerando as interações entre diferentes práticas e as especificidades de cada ambiente produtivo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-primary-800 mb-2">Fase 1: Diagnóstico</h4>
                <p className="text-sm text-gray-700">Identificar os fatores específicos que limitam a produtividade na propriedade</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-primary-800 mb-2">Fase 2: Planejamento</h4>
                <p className="text-sm text-gray-700">Selecionar e priorizar as soluções mais adequadas para o contexto local</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-primary-800 mb-2">Fase 3: Implementação</h4>
                <p className="text-sm text-gray-700">Executar as práticas de forma gradual e monitorar constantemente os resultados</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link to="/steps-to-avoid" className="btn btn-primary flex items-center gap-2">
                Ver Passos Práticos <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-50">
        <div className="container-custom">
          <SectionHeader
            title="Detalhamento das Soluções"
            subtitle="Aprofunde-se nas principais estratégias para reduzir o yield gap no algodão"
            centered
          />

          <div className="space-y-16">
            {/* Manejo do Solo */}
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-600 rounded-full mr-4">
                  <Seedling size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-800">Manejo Adequado do Solo</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
                <div className="lg:col-span-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Principais Práticas</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <ArrowRightCircle size={20} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Sistema Plantio Direto</p>
                          <p className="text-gray-700">Manter o solo permanentemente coberto, minimizando a perturbação mecânica e rotacionando culturas. Isso aumenta a matéria orgânica, reduz erosão e melhora a estrutura física do solo.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRightCircle size={20} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Correção do Solo</p>
                          <p className="text-gray-700">Realizar análises periódicas e aplicar calcário e gesso em doses e épocas adequadas para corrigir acidez e fornecer cálcio em profundidade, favorecendo o desenvolvimento radicular do algodoeiro.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRightCircle size={20} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Adubação Balanceada</p>
                          <p className="text-gray-700">Fornecer nutrientes de forma equilibrada, considerando resultados de análises de solo e foliar, histórico da área e expectativa de produtividade, priorizando o parcelamento da adubação nitrogenada.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRightCircle size={20} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Descompactação Biológica</p>
                          <p className="text-gray-700">Utilizar plantas de cobertura com sistema radicular vigoroso (como braquiárias e crotalárias) para romper camadas compactadas e melhorar a estrutura física do solo em profundidade.</p>
                        </div>
                      </li>
                    </ul>
                  </motion.div>
                </div>
                
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-md p-6 h-full"
                  >
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Impacto no Yield Gap</h4>
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">Potencial de Redução do Gap</span>
                        <span className="text-sm font-bold text-primary-700">25-35%</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary-600 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    
                    <h5 className="font-semibold text-gray-800 mb-2">Principais Benefícios:</h5>
                    <ul className="text-gray-700 space-y-2 mb-4">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <span>Maior disponibilidade de água e nutrientes</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <span>Desenvolvimento radicular mais profundo</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <span>Redução de estresses abióticos</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <span>Maior resistência a períodos de déficit hídrico</span>
                      </li>
                    </ul>
                    
                    <div className="bg-primary-50 p-3 rounded-lg">
                      <p className="text-sm text-primary-800 font-medium">
                        Tempo para resultados: Médio a longo prazo (2-3 safras para efeitos completos)
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Irrigação */}
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent-500 rounded-full mr-4">
                  <Droplet size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-800">Irrigação Eficiente</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Principais Práticas</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <ArrowRightCircle size={20} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Manejo da Irrigação baseado em Dados</p>
                          <p className="text-gray-700">Utilizar sensores de umidade do solo, estações meteorológicas e modelos de balanço hídrico para determinar o momento e a quantidade exata de água a ser aplicada em cada fase da cultura.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRightCircle size={20} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Sistemas de Irrigação de Precisão</p>
                          <p className="text-gray-700">Implementar sistemas como gotejamento, pivô central com LEPA (Low Energy Precision Application) ou aspersão de precisão, que oferecem maior uniformidade e eficiência na aplicação de água.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRightCircle size={20} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Irrigação Deficitária Controlada</p>
                          <p className="text-gray-700">Aplicar estratégias de irrigação deficitária em fases menos sensíveis da cultura, visando otimizar o uso da água sem comprometer significativamente a produtividade.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRightCircle size={20} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Fertirrigação</p>
                          <p className="text-gray-700">Aplicar nutrientes via água de irrigação, permitindo maior parcelamento, uniformidade e eficiência na nutrição das plantas, especialmente para nitrogênio e potássio.</p>
                        </div>
                      </li>
                    </ul>
                  </motion.div>
                </div>
                
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-md p-6 h-full"
                  >
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Impacto no Yield Gap</h4>
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">Potencial de Redução do Gap</span>
                        <span className="text-sm font-bold text-primary-700">35-45%</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary-600 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    
                    <h5 className="font-semibold text-gray-800 mb-2">Principais Benefícios:</h5>
                    <ul className="text-gray-700 space-y-2 mb-4">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <span>Eliminação do estresse hídrico</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <span>Maior absorção e eficiência de nutrientes</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <span>Redução de abortamento de estruturas reprodutivas</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <span>Estabilidade de produção entre safras</span>
                      </li>
                    </ul>
                    
                    <div className="bg-primary-50 p-3 rounded-lg">
                      <p className="text-sm text-primary-800 font-medium">
                        Tempo para resultados: Imediato a curto prazo (mesma safra de implementação)
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Casos de Sucesso"
            subtitle="Exemplos reais de redução do yield gap em diferentes regiões produtoras"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <CaseStudyCard
              title="Fazenda Esperança"
              location="Oeste da Bahia"
              result="Redução de 40% no yield gap"
              description="Implementação de sistema de plantio direto combinado com manejo de irrigação de precisão e cultivares adaptadas à região, resultando em um aumento de produtividade de 3.200 para 4.500 kg/ha em três safras."
              image="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg"
              delay={0}
            />
            <CaseStudyCard
              title="Grupo Santa Fé"
              location="Mato Grosso"
              result="Redução de 35% no yield gap"
              description="Adoção de agricultura de precisão integrada com manejo biológico de solo e controle integrado de pragas, elevando a produtividade média de 3.800 para 4.900 kg/ha e reduzindo custos com defensivos em 20%."
              image="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg"
              delay={1}
            />
            <CaseStudyCard
              title="Fazenda Nova Fronteira"
              location="Goiás"
              result="Redução de 30% no yield gap"
              description="Foco na nutrição balanceada com base em análises de solo e foliar, associada à rotação com leguminosas e monitoramento intensivo de pragas, aumentando a produtividade de 3.600 para 4.400 kg/ha."
              image="https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg"
              delay={2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-50 rounded-xl p-6 md:p-8 shadow-md"
          >
            <div className="flex items-center mb-4">
              <BarChart2 size={24} className="text-primary-600 mr-3" />
              <h3 className="text-xl font-semibold text-primary-800">Fatores Comuns de Sucesso</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-primary-700 mb-2">Abordagem Integrada</h4>
                <p className="text-sm text-gray-700">Implementação de múltiplas soluções de forma coordenada, considerando as interações entre diferentes práticas</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-primary-700 mb-2">Monitoramento Constante</h4>
                <p className="text-sm text-gray-700">Acompanhamento regular de indicadores de solo, planta e ambiente para ajustes rápidos no manejo</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-primary-700 mb-2">Capacitação Técnica</h4>
                <p className="text-sm text-gray-700">Investimento na formação da equipe e acesso a assistência técnica especializada</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-primary-700 mb-2">Persistência</h4>
                <p className="text-sm text-gray-700">Compromisso com a melhoria contínua e paciência para resultados que podem levar mais de uma safra</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-primary-50">
        <div className="container-custom">
          <SectionHeader
            title="Vídeo Educacional"
            subtitle="Especialistas discutem as melhores práticas para reduzir o yield gap no algodão"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg bg-gray-200"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <Video size={48} className="text-primary-600 mb-4" />
                <p className="text-center text-gray-700">Vídeo em produção</p>
                <p className="text-center text-gray-500 text-sm mt-2">Em breve, especialistas discutirão estratégias práticas para redução do yield gap</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary-800">O que você vai aprender</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRightCircle size={20} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Diagnóstico e Identificação</p>
                    <p className="text-gray-700">Como identificar os principais fatores limitantes da produtividade em sua lavoura</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRightCircle size={20} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Planejamento Estratégico</p>
                    <p className="text-gray-700">Elaboração de um plano de ação customizado para a realidade de sua propriedade</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRightCircle size={20} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Implementação Eficiente</p>
                    <p className="text-gray-700">Dicas práticas para a adoção de novas tecnologias e práticas de manejo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRightCircle size={20} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Avaliação de Resultados</p>
                    <p className="text-gray-700">Métodos para mensurar o impacto das intervenções na redução do yield gap</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6">
                <Link to="/steps-to-avoid" className="btn btn-primary">
                  Ver Guia Prático
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Pronto para transformar sua produtividade?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Conheça as estratégias práticas para reduzir o yield gap em sua lavoura de algodão e maximize seus resultados.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/steps-to-avoid" className="btn bg-primary-500 text-white hover:bg-primary-600">
              Guia Passo a Passo
            </Link>
            <Link to="/minecraft-yield-gap" className="btn bg-accent-500 text-white hover:bg-accent-600">
              Experimente o Jogo em Minecraft
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolveYieldGap;