import { motion } from 'motion/react';
import { useState } from 'react';

const MILESTONES = [
  {
    year: "2006",
    title: "Mac Pro 1,1",
    desc: "A transição do Power Mac G5 para Intel. O primeiro Mac Pro trazia o icônico chassi de alumínio perfurado e slots massivos de expansão.",
    color: "bg-gray-500"
  },
  {
    year: "2013",
    title: "O Design Cilindro",
    desc: "Um design radical e compacto focado em núcleos duplos de GPU e um núcleo térmico central unificado, carinhosamente chamado de 'trashcan'.",
    color: "bg-zinc-800"
  },
  {
    year: "2019",
    title: "Retorno às Origens",
    desc: "O retorno da torre modular com o design 'Cheese Grater', focado em máxima expansibilidade PCIe e ventilação silenciosa.",
    color: "bg-zinc-400"
  },
  {
    year: "2023",
    title: "Apple Silicon Era",
    desc: "O Mac Pro recebe o chip M2 Ultra, integrando a performance unificada do silício da Apple com a versatilidade dos slots PCIe.",
    color: "bg-gradient-to-r from-blue-500 to-purple-600"
  },
  {
    year: "Expansão",
    title: "Slots PCIe Gen 4",
    desc: "Diferente de outros Macs, o Mac Pro oferece sete slots de expansão para placas de áudio, redes de alta velocidade e armazenamento.",
    color: "bg-blue-400"
  },
  {
    year: "Futuro",
    title: "Performance Total",
    desc: "Com o Neural Engine e arquitetura de 3nm no horizonte, o Mac Pro continua sendo a base técnica das maiores produções do mundo.",
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
