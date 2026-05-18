import { motion } from 'motion/react';
import { History, Target, Laptop } from 'lucide-react';

const INTRO_CARDS = [
  {
    icon: <Laptop className="text-apple-blue" size={32} />,
    title: "O que é?",
    text: "O Mac Pro é a workstation de desktop mais potente da Apple, projetada para profissionais que exigem máxima performance, expansibilidade e estabilidade em fluxos de trabalho extremos."
  },
  {
    icon: <History className="text-apple-blue" size={32} />,
    title: "Origem",
    text: "Lançado em 2006 como sucessor do Power Mac G5, o Mac Pro estabeleceu o padrão para computação de alto desempenho, evoluindo de torres modulares para designs compactos e retornando à modularidade."
  },
  {
    icon: <Target className="text-apple-blue" size={32} />,
    title: "Público-Alvo",
    text: "Estúdios de cinema, cientistas de dados, engenheiros de áudio e profissionais de renderização 3D que necessitam de uma máquina robusta e infinitamente capaz."
  }
];

export default function Introduction() {
  return (
    <section id="intro" className="py-24 md:py-32 bg-apple-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">A Estação Próxima do Infinito</h2>
            <p className="text-apple-silver/60 text-lg leading-relaxed">
              O Mac Pro representa o ápice da engenharia da Apple. Diferente do MacBook, ele é focado em 
              permanência, expansão e capacidade de processamento sustentada por períodos indefinidos 
              graças ao seu sistema térmico avançado.
            </p>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="flex-1 w-full aspect-video rounded-[32px] overflow-hidden glass border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=2670&auto=format&fit=crop" 
              alt="Mac Pro Production Setup" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INTRO_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 glass rounded-3xl group hover:border-apple-blue/30 transition-colors"
            >
              <div className="mb-6 bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">{card.title}</h3>
              <p className="text-apple-silver/60 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
