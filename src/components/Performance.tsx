import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DATA = [
  { name: 'Intel Xeon 28-core', value: 100, color: '#444' },
  { name: 'Apple M1 Ultra', value: 250, color: '#3b82f6' },
  { name: 'Apple M2 Ultra', value: 380, color: '#8b5cf6' },
];

const CATEGORIES = [
  { title: "Transcodificação de Vídeo", text: "Processa 22 trilhas de vídeo 8K ProRes simultaneamente." },
  { title: "Simulação Científica", text: "Cálculos matemáticos complexos resolvidos em fração do tempo de workstations Intel." },
  { title: "Renderização 3D", text: "Suporte a ray tracing via software e hardware integrado no silício Apple." },
  { title: "Inteligência Artificial", text: "Capacidade de rodar modelos LLM massivos graças aos 192GB de memória unificada." }
];

export default function Performance() {
  return (
    <section id="performance" className="py-24 md:py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Performance Incomparável</h2>
            <p className="text-apple-silver/60 text-lg mb-8 leading-relaxed">
              O Mac Pro com Apple Silicon redefiniu o que uma workstation pode fazer sem consumir centenas de watts e gerar calor excessivo.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-8 border border-white/5 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" 
                alt="High Performance Technology" 
                className="w-full h-full object-cover opacity-70"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <div className="space-y-6">
              {CATEGORIES.map((cat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 p-4 hover:bg-white/5 rounded-2xl transition-colors group"
                >
                  <div className="w-1.5 h-12 bg-apple-blue rounded-full group-hover:h-16 transition-all" />
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">{cat.title}</h4>
                    <p className="text-sm text-apple-silver/50">{cat.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[40px] aspect-square lg:aspect-auto h-[500px]"
          >
            <h3 className="text-xl font-display font-semibold mb-8 text-center">Comparativo de CPU (Pontuação Relativa)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA} layout="vertical" margin={{ left: 20, right: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis 
                   dataKey="name" 
                   type="category" 
                   stroke="#888" 
                   fontSize={12} 
                   tickLine={false} 
                   axisLine={false}
                   width={100}
                />
                <Tooltip 
                   cursor={{ fill: 'transparent' }} 
                   contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-8 text-xs text-apple-silver/30 text-center uppercase tracking-widest">
              Dados baseados em testes internos e benchmarks de mercado (Geekbench 6)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
