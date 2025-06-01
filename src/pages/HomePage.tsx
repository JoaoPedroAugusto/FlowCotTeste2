import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sprout, BarChart3, PenTool as Tool, BookOpen } from 'lucide-react';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';
import VideoPlayer from '../components/VideoPlayer';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "FlowCot";
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <Hero
        title="Yield Gap do Algodão no Brasil"
        subtitle="Maximizando a produtividade para um futuro sustentável da cotonicultura brasileira"
        imageUrl="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
      />

      <section className="section">
        <div className="container-custom">
          <SectionHeader
            title="O Que é o Yield Gap?"
            subtitle="Entenda a diferença entre o potencial produtivo e a realidade nas lavouras de algodão brasileiras."
            centered
          />

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <VideoPlayer
                src="https://player.vimeo.com/external/373787639.hd.mp4?s=dee27e23aac0fc7c24892cf4b1cacce6b7c57c6c&profile_id=175&oauth2_token_id=57447761"
                title="Entendendo o Yield Gap"
                poster="https://images.pexels.com/photos/4946994/pexels-photo-4946994.jpeg"
              />
            </div>

            <div className="w-full md:w-1/2">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary-800">
                  Por que isso importa?
                </h3>
                <p className="mb-4 text-gray-700">
                  O <strong>yield gap</strong> (lacuna de produtividade) representa a diferença entre a produtividade potencial que poderia ser alcançada em condições ideais e a produtividade real obtida nas fazendas brasileiras.
                </p>
                <p className="mb-4 text-gray-700">
                  Reduzir essa lacuna significa aumentar a produção sem expandir a área plantada, resultando em maior eficiência, sustentabilidade e lucratividade.
                </p>
                <div className="mt-6">
                  <Link to="/what-is-yield-gap" className="btn btn-primary">
                    Entenda o Conceito
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-50">
        <div className="container-custom">
          <SectionHeader
            title="Explorando o Yield Gap"
            subtitle="Conheça as principais áreas de estudo para entender e solucionar o yield gap do algodão no Brasil."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard
              title="O Que é Yield Gap"
              description="Entenda o conceito, os tipos de produtividade e a importância de reduzir essa lacuna."
              icon={Sprout}
              delay={0}
              illustration="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
            />
            <InfoCard
              title="Evolução Histórica"
              description="Conheça a evolução do yield gap na cotonicultura brasileira desde 2000 até 2025."
              icon={BarChart3}
              delay={1}
              illustration="https://images.pexels.com/photos/4946994/pexels-photo-4946994.jpeg"
            />
            <InfoCard
              title="Ferramentas de Análise"
              description="Descubra as principais tecnologias e metodologias para identificar e quantificar o yield gap."
              icon={Tool}
              delay={2}
              illustration="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg"
            />
            <InfoCard
              title="Soluções Práticas"
              description="Conheça as melhores práticas e tecnologias para reduzir o yield gap e aumentar a produtividade."
              icon={BookOpen}
              delay={3}
              illustration="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-primary-800">
                Transforme sua produção de algodão
              </h2>
              <p className="mb-4 text-gray-700">
                Nosso objetivo é fornecer conhecimento e soluções práticas para agricultores, pesquisadores e estudantes interessados em melhorar a produtividade do algodão brasileiro.
              </p>
              <p className="mb-6 text-gray-700">
                Através de conteúdo educacional, ferramentas de análise e recomendações baseadas em evidências científicas, queremos contribuir para uma cotonicultura mais eficiente e sustentável.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/steps-to-avoid" className="btn btn-primary">
                  Passos Práticos
                </Link>
                <Link to="/about-us" className="btn btn-outline">
                  Conheça Nossa Equipe
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <VideoPlayer
                src="https://player.vimeo.com/external/373787639.hd.mp4?s=dee27e23aac0fc7c24892cf4b1cacce6b7c57c6c&profile_id=175&oauth2_token_id=57447761"
                title="Transformando a Cotonicultura"
                poster="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg"
              />
              <div className="absolute top-0 left-0 bg-primary-600 text-white font-semibold py-2 px-4 rounded-tl-lg rounded-br-lg">
                Inovação na Cotonicultura
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Pronto para maximizar sua produtividade?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Descubra como reduzir o yield gap e aumentar a eficiência da sua produção de algodão.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/solve-yield-gap" className="btn bg-primary-500 text-white hover:bg-primary-600">
              Explorar Soluções
            </Link>
            <Link to="/minecraft-yield-gap" className="btn bg-accent-500 text-white hover:bg-accent-600">
              Jogo em Minecraft
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;