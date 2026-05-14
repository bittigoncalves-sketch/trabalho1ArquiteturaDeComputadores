import { motion } from 'motion/react';
import { Star, Award, Briefcase, Globe } from 'lucide-react';

const TRIVIA = [
  {
    icon: <Star size={24} />,
    title: "Grade de Ventilação",
    text: "O design do chassi de 2019 é baseado em uma estrutura molecular que maximiza o fluxo de ar mantendo a rigidez estrutural."
  },
  {
    icon: <Globe size={24} />,
    title: "Modularidade de Chassi",
    text: "O Mac Pro é o único computador da Apple atual onde o usuário pode remover facilmente o gabinete externo para acessar o interior."
  },
  {
    icon: <Briefcase size={24} />,
    title: "Rodas Opcionais",
    text: "A Apple oferece um kit de rodinhas para o Mac Pro que custa cerca de 400 dólares, tornando-se um símbolo de debate sobre preço e valor."
  },
  {
    icon: <Award size={24} />,
    title: "M2 Ultra e Além",
    text: "O chip M2 Ultra no Mac Pro é capaz de processar simultaneamente bilhões de operações por segundo em workflows de cinema 8K."
  }
];

export default function Trivia() {
  return (
    <section id="trivia" className="py-24 md:py-32 bg-apple-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">Curiosidades</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRIVIA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 glass rounded-3xl hover:border-apple-blue/50 transition-all duration-500 h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-apple-blue/20 group-hover:text-apple-blue transition-all">
                {item.icon}
              </div>
              <h4 className="text-xl font-display font-bold mb-4">{item.title}</h4>
              <p className="text-sm text-apple-silver/50 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
