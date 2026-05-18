import { motion } from 'motion/react';

export default function Conclusion() {
  return (
    <section id="conclusion" className="py-32 bg-apple-black">
      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">
            Mais que um Computador,<br />
            <span className="text-apple-blue italic">Uma Revolução.</span>
          </h2>
          
          <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="w-full max-w-2xl mx-auto aspect-video rounded-[32px] overflow-hidden mb-12 glass border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1547119957-630f9c31ad68?q=80&w=2670&auto=format&fit=crop" 
              alt="Mac Pro Finale" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <p className="text-xl text-apple-silver/60 leading-relaxed mb-16">
            O Mac Pro encerra este trabalho não apenas como um produto de mercado, mas como um marco da engenharia moderna. 
            A transição para o Apple Silicon provou que é possível unir potência bruta e eficiência extrema, inspirando a indústria a elevar o nível tecnológico. 
            É a fundação técnica de quem molda o futuro através do código, da arte e da ciência com workflows extremos.
          </p>
          
          <div className="h-px w-24 bg-apple-blue mx-auto mb-12" />
          
          <div className="flex flex-col items-center">
            <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Integrantes do Grupo</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg font-medium max-w-2xl">
              <span>Gabriel Bitti</span>
              <span className="text-white/20">•</span>
              <span>Cesar Augusto</span>
              <span className="text-white/20">•</span>
              <span>Gustavo</span>
              <span className="text-white/20">•</span>
              <span>Guilherme</span>
              <span className="text-white/20">•</span>
              <span>Vitor</span>
            </div>
            <p className="mt-8 text-apple-blue/80 font-display font-bold">2024 • Ciência da Computação</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
