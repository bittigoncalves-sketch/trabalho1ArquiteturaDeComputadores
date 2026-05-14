import { motion } from 'motion/react';
import { Cpu, Monitor, Battery, Zap, Fingerprint, Waves } from 'lucide-react';

const FEATURES = [
  {
    icon: <Cpu className="text-purple-400" />,
    title: "Chip M2 Ultra",
    desc: "Une dois chips M2 Max para criar uma potência massiva com 24 núcleos de CPU e até 76 núcleos de GPU."
  },
  {
    icon: <Monitor className="text-blue-400" />,
    title: "Suporte Multi-Monitor",
    desc: "Capacidade de alimentar até oito monitores 4K ou três Pro Display XDR simultaneamente."
  },
  {
    icon: <Zap className="text-yellow-400" />,
    title: "Expansão PCIe",
    desc: "Sete slots de expansão PCIe para customizar seu workflow com placas profissionais de áudio ou vídeo."
  },
  {
    icon: <Waves className="text-cyan-400" />,
    title: "Conectividade Total",
    desc: "Portas Thunderbolt 4, 10Gb Ethernet e Wi-Fi 6E para as velocidades mais rápidas de transferência."
  },
  {
    icon: <Fingerprint className="text-pink-400" />,
    title: "Chassi em Aço",
    desc: "Estrutura interna em aço inoxidável projetada para facilitar o acesso e a mobilidade com rodas opcionais."
  },
  {
    icon: <Battery className="text-green-400" />,
    title: "Arquitetura Térmica",
    desc: "Três ventoinhas frontais massivas silenciosas que mantêm o sistema resfriado mesmo em carga máxima."
  }
];

export default function Hardware() {
  return (
    <section id="hardware" className="py-24 md:py-32 bg-apple-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Hardware e Engenharia</h2>
          <p className="text-apple-silver/60 max-w-2xl mx-auto">
            Por dentro da estação: como a Apple redefiniu o que é possível em uma workstation modular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="p-8 glass rounded-3xl flex flex-col gap-6 group hover:bg-white/[0.05] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                {feat.icon}
              </div>
              <div>
                <h4 className="text-xl font-display font-bold mb-2">{feat.title}</h4>
                <p className="text-apple-silver/50 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Large Highlight Card */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="md:col-span-3 p-10 bg-gradient-to-br from-zinc-800 to-black border border-white/10 rounded-[40px] flex flex-col md:flex-row items-center gap-12 overflow-hidden relative"
          >
             <div className="flex-1 z-10">
                <span className="text-apple-blue font-mono text-sm uppercase mb-4 block">Diferencial</span>
                <h3 className="text-4xl font-display font-bold mb-6 italic">Memória Unificada</h3>
                <p className="text-apple-silver/60 text-lg mb-8 leading-relaxed">
                  Ao contrário da RAM tradicional, a arquitetura de memória unificada da Apple permite que o CPU e a GPU acessem os mesmos dados sem precisar copiá-los entre pools de memória separados. Isso resulta em latência ultra baixa e largura de banda massiva.
                </p>
                <div className="flex gap-4">
                   <div className="glass px-4 py-2 rounded-full text-xs font-medium">Até 128GB</div>
                   <div className="glass px-4 py-2 rounded-full text-xs font-medium">400GB/s Largura de Banda</div>
                </div>
             </div>
             
             {/* Visual representation */}
             <div className="flex-1 relative w-full h-64 md:h-80 flex items-center justify-center">
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                   className="absolute w-40 h-40 border-2 border-dashed border-apple-blue/30 rounded-full"
                 />
                 <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                   className="absolute w-60 h-60 border border-white/10 rounded-full"
                 />
                 <div className="w-32 h-32 glass rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(0,102,204,0.3)]">
                    <Cpu size={64} className="text-apple-blue" />
                 </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
