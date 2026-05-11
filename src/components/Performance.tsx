import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DATA = [
  { name: 'Intel i9 (2019)', value: 100, color: '#444' },
  { name: 'Apple M1 Max', value: 240, color: '#3b82f6' },
  { name: 'Apple M2 Max', value: 310, color: '#6366f1' },
  { name: 'Apple M3 Max', value: 480, color: '#8b5cf6' },
];

const CATEGORIES = [
  { title: "Edição de Vídeo", text: "Renderização de múltiplas trilhas ProRes 8K sem engasgos." },
  { title: "Programação", text: "Compilação de código 4x mais rápida que modelos Intel." },
  { title: "IA & ML", text: "Aceleração de redes neurais via Neural Engine integrado." },
  { title: "3D & Jogos", text: "Ray Tracing por hardware pela primeira vez em um Mac." }
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
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Poder sem Precedentes</h2>
            <p className="text-apple-silver/60 text-lg mb-12 leading-relaxed">
              O MacBook Pro não apenas compete com desktops de alto nível; ele os supera em eficiência. 
              A integração vertical entre hardware e software permite que o sistema extraia cada grama de performance do silício.
            </p>
            
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
