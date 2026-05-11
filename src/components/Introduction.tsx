import { motion } from 'motion/react';
import { History, Target, Laptop } from 'lucide-react';

const INTRO_CARDS = [
  {
    icon: <Laptop className="text-apple-blue" size={32} />,
    title: "O que é?",
    text: "O MacBook Pro é a linha de notebooks de alto desempenho da Apple, projetada para fluxos de trabalho intensos que exigem poder de processamento, excelência visual e autonomia."
  },
  {
    icon: <History className="text-apple-blue" size={32} />,
    title: "Origem",
    text: "Lançado originalmente em 2006 como sucessor do PowerBook G4, marcou a transição histórica da Apple para processadores Intel, definindo o padrão de design unibody."
  },
  {
    icon: <Target className="text-apple-blue" size={32} />,
    title: "Público-Alvo",
    text: "Desenvolvedores, editores de vídeo, fotógrafos, designers e profissionais que buscam uma máquina confiável e extremamente potente para o dia a dia."
  }
];

export default function Introduction() {
  return (
    <section id="intro" className="py-24 md:py-32 bg-apple-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-3xl mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">A Ferramenta Definitiva</h2>
          <p className="text-apple-silver/60 text-lg leading-relaxed">
            Mais do que um simples notebook, o MacBook Pro é um ecossistema de produtividade. 
            Ao longo de quase duas décadas, ele evoluiu de uma workstation portátil 
            para um objeto de desejo tecnológico que dita tendências globais.
          </p>
        </motion.div>

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
