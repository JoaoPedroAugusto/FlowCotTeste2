import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../components/SectionHeader';
import { LineChart, BarChart, Satellite, Database, BrainCircuit, Ruler } from 'lucide-react';

const ToolsForYieldGap: React.FC = () => {
  useEffect(() => {
    document.title = "Ferramentas para Descobrir o Yield Gap | AlgodãoTech";
  }, []);

  const tools = [
    {
      title: "Modelos de Simulação de Culturas",
      description: "Ferramentas computacionais que simulam o crescimento e desenvolvimento das plantas de algodão em diferentes condições ambientais e de manejo.",
      icon: LineChart,
      examples: ["DSSAT", "APSIM", "CropSyst"],
      advantages: ["Permite estimar o potencial produtivo teórico", "Ajuda a entender interações complexas entre genótipo, ambiente e manejo", "Possibilita simular diferentes cenários"],
    },
    {
      title: "Sensoriamento Remoto",
      description: "Uso de imagens de satélite e drones para monitorar o desenvolvimento das lavouras e identificar áreas com problemas de crescimento ou produtividade.",
      icon: Satellite,
      examples: ["Índice de Vegetação por Diferença Normalizada (NDVI)", "Imagens multiespectrais e hiperespectrais", "Termografia"],
      advantages: ["Cobertura de grandes áreas", "Monitoramento contínuo ao longo do ciclo", "Identificação precoce de estresses"],
    },
    {
      title: "Análise de Dados e Machine Learning",
      description: "Aplicação de técnicas estatísticas avançadas e inteligência artificial para analisar grandes volumes de dados e identificar padrões relacionados ao yield gap.",
      icon: BrainCircuit,
      examples: ["Algoritmos de aprendizado de máquina", "Redes neurais", "Análise preditiva"],
      advantages: ["Processamento de múltiplas variáveis simultaneamente", "Identificação de relações não óbvias entre fatores", "Geração de modelos preditivos"],
    },
    {
      title: "Análise Comparativa de Desempenho",
      description: "Comparação sistemática entre produtores ou regiões com diferentes níveis de produtividade para identificar práticas de manejo e fatores associados a altos rendimentos.",
      icon: BarChart,
      examples: ["Benchmarking", "Análise de eficiência", "Estudos de caso"],
      advantages: ["Baseado em dados reais de produção", "Identifica boas práticas aplicáveis localmente", "Facilita a transferência de conhecimento"],
    },
    {
      title: "Bancos de Dados Agrícolas",
      description: "Sistemas que integram e organizam informações sobre solo, clima, práticas de manejo e produtividade para facilitar a análise do yield gap em diferentes escalas.",
      icon: Database,
      examples: ["Sistema de Informações Geográficas (SIG)", "Bancos de dados de produtividade regional", "Plataformas de gestão agrícola"],
      advantages: ["Centralização de informações", "Análises temporais e espaciais", "Suporte à tomada de decisão"],
    },
    {
      title: "Experimentos de Campo",
      description: "Condução de ensaios experimentais para quantificar o impacto de diferentes práticas de manejo na produtividade do algodão e identificar limitações específicas.",
      icon: Ruler,
      examples: ["Experimentos fatoriais", "Ensaios de variedades", "Parcelas demonstrativas"],
      advantages: ["Resultados localmente adaptados", "Validação de hipóteses específicas", "Demonstração prática de potencial produtivo"],
    },
  ];

  return (
    <div className="pt-24">
      <section className="section bg-primary-50">
        <div className="container-custom">
          <SectionHeader
            title="Ferramentas para Descobrir o Yield Gap"
            subtitle="Conheça as principais metodologias e tecnologias utilizadas para identificar e quantificar o yield gap na cultura do algodão"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary-800">A Importância da Diagnose Precisa</h3>
              <p className="mb-4 text-gray-700">
                Para reduzir efetivamente o yield gap, é fundamental primeiro identificá-lo e compreender suas causas específicas. Isso requer ferramentas e metodologias apropriadas que permitam quantificar a diferença entre a produtividade potencial ou atingível e a produtividade real obtida pelos agricultores.
              </p>
              <p className="mb-4 text-gray-700">
                Diferentes abordagens podem ser utilizadas, desde modelos de simulação que estimam o potencial teórico até análises de dados em larga escala que identificam padrões e tendências em situações reais de cultivo.
              </p>
              <p className="text-gray-700">
                A combinação dessas ferramentas permite não apenas determinar a magnitude do yield gap, mas também identificar os fatores limitantes específicos para cada região ou sistema de produção, orientando intervenções mais eficazes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg"
                alt="Análise de dados agrícolas"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-full mr-4">
                    <tool.icon size={24} className="text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-800">{tool.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{tool.description}</p>
                
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-800 mb-2">Exemplos:</h4>
                  <ul className="text-gray-700 pl-5 list-disc">
                    {tool.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Vantagens:</h4>
                  <ul className="text-gray-700 pl-5 list-disc">
                    {tool.advantages.map((advantage, i) => (
                      <li key={i}>{advantage}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Integrando Ferramentas para Uma Análise Completa"
            subtitle="Abordagem sistemática para identificação e quantificação do yield gap no algodão"
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-50 rounded-xl p-6 md:p-8 shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 text-primary-800">Metodologia em Cinco Etapas</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</div>
                  <h4 className="text-lg font-semibold text-primary-800">Definição dos Níveis de Referência</h4>
                </div>
                <p className="text-gray-700 pl-11">
                  Estabelecer claramente os níveis de produtividade de referência (potencial, atingível) para a região ou sistema de produção específico, utilizando modelos de simulação calibrados para as condições locais.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</div>
                  <h4 className="text-lg font-semibold text-primary-800">Quantificação da Produtividade Real</h4>
                </div>
                <p className="text-gray-700 pl-11">
                  Coletar dados de produtividade real de múltiplas fontes (agricultores, experimentos, estatísticas oficiais) e validá-los para garantir sua representatividade e precisão.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</div>
                  <h4 className="text-lg font-semibold text-primary-800">Análise Espacial e Temporal</h4>
                </div>
                <p className="text-gray-700 pl-11">
                  Utilizar ferramentas de sensoriamento remoto e SIG para analisar a variabilidade espacial do yield gap, e dados históricos para compreender sua evolução ao longo do tempo.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</div>
                  <h4 className="text-lg font-semibold text-primary-800">Identificação de Fatores Limitantes</h4>
                </div>
                <p className="text-gray-700 pl-11">
                  Aplicar análises estatísticas e técnicas de machine learning para identificar os principais fatores associados ao yield gap, considerando variáveis climáticas, edáficas, bióticas e de manejo.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</div>
                  <h4 className="text-lg font-semibold text-primary-800">Validação em Campo</h4>
                </div>
                <p className="text-gray-700 pl-11">
                  Conduzir experimentos de campo para validar os fatores limitantes identificados e quantificar seu impacto na produtividade, desenvolvendo recomendações específicas para redução do yield gap.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ToolsForYieldGap;