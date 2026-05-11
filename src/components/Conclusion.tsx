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
          <p className="text-xl text-apple-silver/60 leading-relaxed mb-16">
            O MacBook Pro encerra este trabalho não apenas como um produto de mercado, mas como um marco da engenharia moderna. 
            A transição para o Apple Silicon provou que é possível unir potência bruta e eficiência extrema, inspirando a indústria a elevar o nível tecnológico. 
            É o companheiro inseparável de quem molda o futuro através do código, da arte e da ciência.
          </p>
          
          <div className="h-px w-24 bg-apple-blue mx-auto mb-12" />
          
          <div className="flex flex-col items-center">
            <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Integrantes do Grupo</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg font-medium">
              <span>Seu Nome</span>
              <span className="text-white/20">•</span>
              <span>Colega 1</span>
              <span className="text-white/20">•</span>
              <span>Colega 2</span>
            </div>
            <p className="mt-8 text-apple-blue/80 font-display font-bold">2024 • Ciência da Computação</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
