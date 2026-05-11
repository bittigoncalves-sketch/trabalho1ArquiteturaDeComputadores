import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-apple-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="text-apple-blue font-mono text-sm tracking-widest uppercase">Trabalho Acadêmico</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight leading-none"
        >
          Mac Pro<br />
          <span className="text-gradient">Estação de Trabalho Real</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-apple-silver/60 text-lg md:text-xl max-w-2xl mb-12"
        >
          A linha mais poderosa de workstations profissionais da Apple. Projetado para expansão, performance absurda e fluxos de trabalho que desafiam os limites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          className="relative w-full max-w-2xl aspect-[4/5] md:aspect-[16/10] mb-12 group"
        >
          {/* Mac Pro Tower Frame Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2e] to-[#0a0a0b] rounded-[40px] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center p-4">
             <img 
               src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/4E16/production/_110109991_gettyimages-1147877086.jpg.webp" 
               alt="Mac Pro Tower" 
               className="w-full h-full object-cover rounded-[30px] opacity-90 group-hover:scale-105 transition-transform duration-700"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
             <div className="absolute bottom-10 left-12 z-10 text-left">
                <span className="text-4xl font-display font-bold tracking-tighter text-white">Chip M2 Ultra</span>
                <p className="text-sm text-apple-blue uppercase tracking-[0.3em] font-bold mt-2">Arquitetura Profissional</p>
             </div>
          </div>
          {/* Base Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-apple-blue/20 blur-3xl rounded-full opacity-50" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5 }}
           className="flex flex-col items-center gap-4"
        >
           <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">Apresentado por</span>
              <p className="text-lg font-medium">Sua Equipe / Instituição</p>
           </div>
           
           <motion.a 
            href="#intro"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-8 text-apple-silver hover:text-apple-blue transition-colors"
           >
              <ChevronDown size={32} />
           </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
