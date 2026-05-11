import { motion } from 'motion/react';
import { useState } from 'react';

const MILESTONES = [
  {
    year: "2006",
    title: "O Início Intel",
    desc: "O primeiro MacBook Pro substitui o PowerBook G4, trazendo processadores Intel Core Duo e a conexão MagSafe.",
    color: "bg-gray-500"
  },
  {
    year: "2008",
    title: "Unibody Design",
    desc: "A Apple introduz o chassi esculpido em uma única peça de alumínio, elevando a durabilidade e integrando a Mini DisplayPort.",
    color: "bg-zinc-400"
  },
  {
    year: "2012",
    title: "Retina Display",
    desc: "Uma revolução visual com resolução de 2880 x 1800, removendo o leitor de CD e tornando o perfil muito mais fino.",
    color: "bg-blue-400"
  },
  {
    year: "2016",
    title: "Touch Bar",
    desc: "Foco total em USB-C/Thunderbolt 3 e a introdução da faixa OLED sensível ao toque no teclado.",
    color: "bg-purple-400"
  },
  {
    year: "2020",
    title: "Apple Silicon M1",
    desc: "A mudança mais radical: adeus Intel. O chip M1 traz eficiência energética e desempenho por watt sem precedentes.",
    color: "bg-gradient-to-r from-blue-500 to-purple-600"
  },
  {
    year: "2021-2024",
    title: "Era M1/M2/M3 Pro/Max",
    desc: "O retorno das portas (HDMI, SD) e a introdução dos chips M3 de 3nm, os mais poderosos já criados para laptops.",
    color: "bg-gradient-to-tr from-apple-blue to-indigo-600"
  }
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="evolution" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Evolução Histórica</h2>
          <p className="text-apple-silver/60">Explore os principais marcos que definiram a linha Pro.</p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8">
          {/* Timeline Line */}
          <div className="absolute top-0 left-8 md:left-0 md:top-[1.2rem] w-1 md:w-full h-full md:h-1 bg-white/10" />
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10 w-full">
            {MILESTONES.map((item, idx) => (
              <div 
                key={idx} 
                className="flex md:flex-col gap-4 cursor-pointer group"
                onClick={() => setActiveIndex(idx)}
              >
                <motion.div 
                  className={`w-6 h-6 rounded-full border-4 border-apple-black z-20 flex-shrink-0 transition-colors duration-500 ${
                    activeIndex === idx ? item.color : 'bg-apple-gray group-hover:bg-apple-silver/50'
                  }`}
                  animate={{ scale: activeIndex === idx ? 1.2 : 1 }}
                />
                <div className="flex flex-col gap-2">
                  <span className={`text-sm font-mono font-bold tracking-tighter ${activeIndex === idx ? 'text-white' : 'text-white/20'}`}>
                    {item.year}
                  </span>
                  <h4 className={`font-display font-semibold transition-colors ${activeIndex === idx ? 'text-apple-blue' : 'text-apple-silver/40'}`}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="mt-20">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-10 md:p-16 rounded-[40px] relative overflow-hidden"
          >
             <div className={`absolute top-0 left-0 w-2 h-full ${MILESTONES[activeIndex].color}`} />
             <div className="max-w-2xl">
               <span className="text-apple-blue font-mono mb-4 block">{MILESTONES[activeIndex].year}</span>
               <h3 className="text-4xl font-display font-bold mb-6">{MILESTONES[activeIndex].title}</h3>
               <p className="text-xl text-apple-silver/70 leading-relaxed italic">
                 "{MILESTONES[activeIndex].desc}"
               </p>
             </div>
             
             {/* Decorative element */}
             <div className={`absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-[100px] opacity-20 ${MILESTONES[activeIndex].color}`} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
