import { motion } from 'motion/react';
import { Smartphone, Layout, Share2, ShieldCheck } from 'lucide-react';

const ECOSYSTEM = [
  { icon: <Layout />, label: "Continuidade", sub: "Comece no iPhone, termine no Mac." },
  { icon: <Smartphone />, label: "Controle Universal", sub: "Um mouse e teclado para tudo." },
  { icon: <Share2 />, label: "AirDrop", sub: "Transferência instantânea de arquivos." },
  { icon: <ShieldCheck />, label: "Segurança", sub: "Privacidade por design em cada camada." }
];

export default function OS() {
  return (
    <section id="macos" className="py-24 md:py-32 bg-apple-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 w-full relative h-[400px] md:h-[600px]">
             {/* Abstract OS Visual */}
             <div className="absolute inset-0 bg-apple-blue/10 rounded-[60px] blur-3xl" />
             <motion.div 
               animate={{ 
                 y: [0, -20, 0],
                 rotate: [0, 1, 0]
               }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-10 w-full h-full glass rounded-[40px] p-6 border-white/20 shadow-2xl flex items-center justify-center"
             >
                <div className="text-center">
                   <h3 className="text-6xl md:text-8xl font-display font-black text-gradient opacity-80 mb-2">macOS</h3>
                   <span className="text-apple-silver/40 tracking-[0.5em] uppercase text-sm">Sonoma & Além</span>
                </div>
                
                {/* Floating "Windows" style icons */}
                <motion.div className="absolute top-10 left-10 w-16 h-16 glass rounded-2xl" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} />
                <motion.div className="absolute bottom-20 right-12 w-24 h-24 glass rounded-3xl" animate={{ scale: [1, 0.9, 1] }} transition={{ duration: 5, repeat: Infinity }} />
             </motion.div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Software e Ecossistema</h2>
            <p className="text-apple-silver/60 text-lg mb-12 leading-relaxed">
              O macOS é o coração da experiência Mac. Desenhado para aproveitar cada núcleo do Apple Silicon, ele oferece fluidez, segurança e a melhor integração entre dispositivos do mercado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {ECOSYSTEM.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-10 h-10 text-apple-blue">
                    {item.icon}
                  </div>
                  <h4 className="font-display font-bold text-lg">{item.label}</h4>
                  <p className="text-sm text-apple-silver/50 leading-relaxed">
                    {item.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
