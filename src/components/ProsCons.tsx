import { motion } from 'motion/react';
import { Check, X, Info } from 'lucide-react';

const PROS = [
  "Máxima expansibilidade com 7 slots PCIe.",
  "Performance absurda com o chip M2 Ultra.",
  "Sistema térmico superior que nunca diminui a velocidade.",
  "Até 192GB de memória unificada ultra-rápida.",
  "Inúmeras portas Thunderbolt 4 e 10Gb Ethernet.",
  "Integração perfeita com o monitor Studio Display e Pro Display XDR."
];

const CONS = [
  "Preço extremamente proibitivo para usuários comuns.",
  "Não aceita mais placas de vídeo externas (eGPU).",
  "Memória RAM não pode ser expandida após a compra.",
  "Tamanho físico ocupa espaço significativo na mesa.",
  "Falta de opções de entrada mais acessíveis.",
  "Limitado a nichos profissionais muito específicos."
];

export default function ProsCons() {
  return (
    <section id="pros-cons" className="py-24 md:py-32 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Prós e Contras</h2>
          <p className="text-apple-silver/60">Uma análise realista sobre o custo-benefício do produto.</p>
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="w-full max-w-4xl mx-auto aspect-[21/9] rounded-[40px] overflow-hidden mb-16 border border-white/5 relative"
        >
           <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" 
              alt="Mac Pro Components" 
              className="w-full h-full object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
           <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-display font-medium tracking-[0.2em] uppercase text-white/50">Análise Premium</span>
           </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Pros */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 glass rounded-[40px] border-green-500/10 shadow-[0_20px_50px_rgba(34,197,94,0.05)]"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <Check size={28} />
              </div>
              <h3 className="text-3xl font-display font-bold">Vantagens</h3>
            </div>
            
            <ul className="space-y-6">
               {PROS.map((item, idx) => (
                 <li key={idx} className="flex gap-4 items-start group">
                   <div className="mt-1 w-2 h-2 rounded-full bg-green-500 group-hover:scale-150 transition-transform" />
                   <p className="text-apple-silver/60 group-hover:text-apple-silver transition-colors leading-snug">{item}</p>
                 </li>
               ))}
            </ul>
          </motion.div>

          {/* Cons */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 glass rounded-[40px] border-red-500/10 shadow-[0_20px_50px_rgba(239,68,68,0.05)]"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                <X size={28} />
              </div>
              <h3 className="text-3xl font-display font-bold">Desafios</h3>
            </div>
            
            <ul className="space-y-6">
               {CONS.map((item, idx) => (
                 <li key={idx} className="flex gap-4 items-start group">
                   <div className="mt-1 w-2 h-2 rounded-full bg-red-500 group-hover:scale-150 transition-transform" />
                   <p className="text-apple-silver/60 group-hover:text-apple-silver transition-colors leading-snug">{item}</p>
                 </li>
               ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-16 p-8 bg-apple-blue/5 rounded-3xl border border-apple-blue/20 flex items-start gap-4 max-w-2xl mx-auto"
        >
           <Info className="text-apple-blue flex-shrink-0" />
           <p className="text-sm text-apple-silver/60 italic leading-relaxed">
             <strong>Veredito:</strong> O Mac Pro é um investimento para grandes estúdios. Para profissionais cujo tempo é dinheiro, a economia em velocidade de renderização justifica o custo. Para a maioria, o Mac Studio é a melhor alternativa.
           </p>
        </motion.div>
      </div>
    </section>
  );
}
