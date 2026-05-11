import { motion } from 'motion/react';
import { Star, Award, Briefcase, Globe } from 'lucide-react';

const TRIVIA = [
  {
    icon: <Star size={24} />,
    title: "Cinema e TV",
    text: "O MacBook Pro é o computador mais presente em estúdios de Hollywood. Quase todos os ganhadores do Oscar de edição nos últimos 10 anos usaram um Mac."
  },
  {
    icon: <Globe size={24} />,
    title: "Impacto Ambiental",
    text: "O chassi dos novos modelos é feito de alumínio 100% reciclado, e as soldas da placa lógica usam ouro 100% reciclado."
  },
  {
    icon: <Briefcase size={24} />,
    title: "Padrão Corporativo",
    text: "Empresas como IBM e SAP relatam que usuários de Mac exigem menos suporte técnico e têm maior retenção de valor de revenda que PCs Windows."
  },
  {
    icon: <Award size={24} />,
    title: "Engenharia M",
    text: "O chip M3 Max tem 92 bilhões de transistores, mais do que a população de transistores de supercomputadores de 15 anos atrás."
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
