import { ExternalLink, BookOpen } from 'lucide-react';

const REFS = [
  { name: "Site Oficial Apple - Mac Pro", url: "https://www.apple.com/br/mac-pro/" },
  { name: "Relatório de Impacto Ambiental Apple 2024", url: "https://www.apple.com/environment/" },
  { name: "AnandTech - Apple M2 Ultra Architecture Deep Dive", url: "https://www.anandtech.com" },
  { name: "The Verge - History of the Mac Pro", url: "https://www.theverge.com" },
  { name: "Geekbench - Mac Benchmarks Database", url: "https://browser.geekbench.com/mac-benchmarks" }
];

export default function References() {
  return (
    <footer id="references" className="py-24 bg-zinc-950 border-t border-white/5 h-full flex flex-col justify-center">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <BookOpen className="text-apple-blue" size={24} />
          <h2 className="text-2xl font-display font-bold">Referências Bibliográficas</h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {REFS.map((ref, idx) => (
            <li key={idx}>
              <a 
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 glass rounded-2xl hover:bg-white/[0.03] transition-all"
              >
                <span className="text-apple-silver/70 group-hover:text-apple-silver transition-colors">{ref.name}</span>
                <ExternalLink size={18} className="text-apple-silver/30 group-hover:text-apple-blue transition-colors" />
              </a>
            </li>
          ))}
        </ul>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
             <span className="font-display font-bold text-xl mb-1">Mac Pro Presentation</span>
             <span className="text-xs text-white/30 uppercase tracking-[0.3em]">Project 2024 • Academic Edition</span>
          </div>
          
          <div className="flex gap-8 text-xs text-white/40 uppercase tracking-widest font-medium">
             <span className="cursor-default">© Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
