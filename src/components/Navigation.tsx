import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';

const SECTIONS = [
  { id: 'home', label: 'Início' },
  { id: 'intro', label: 'Introdução' },
  { id: 'evolution', label: 'Evolução' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'performance', label: 'Desempenho' },
  { id: 'macos', label: 'macOS' },
  { id: 'pros-cons', label: 'Prós e Contras' },
  { id: 'trivia', label: 'Curiosidades' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'conclusion', label: 'Conclusão' },
  { id: 'references', label: 'Referências' },
];

interface NavigationProps {
  onNavigate: (index: number) => void;
  activeSlideId: string;
}

export default function Navigation({ onNavigate, activeSlideId }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const activeIndex = SECTIONS.findIndex(s => s.id === activeSlideId);
  const scrollProgress = ((activeIndex + 1) / SECTIONS.length) * 100;

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-apple-gray">
        <motion.div 
          className="h-full bg-apple-blue shadow-[0_0_10px_#0066cc]"
          animate={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-1 p-1 glass rounded-full max-w-[95vw] overflow-x-auto scrollbar-hide">
        {SECTIONS.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => onNavigate(idx)}
            className={`px-3 py-1.5 rounded-full text-[10px] xl:text-xs font-medium transition-all duration-300 whitespace-nowrap ${
              activeSlideId === section.id 
                ? 'bg-apple-silver text-apple-black' 
                : 'text-apple-silver/60 hover:text-apple-silver'
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-40 lg:hidden p-3 glass rounded-full text-apple-silver"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-apple-black flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-display font-bold">Apresentação</span>
              <button onClick={() => setIsOpen(false)} className="p-2 text-apple-silver">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {SECTIONS.map((section, idx) => (
                <motion.button
                  key={section.id}
                  onClick={() => {
                    onNavigate(idx);
                    setIsOpen(false);
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-2xl font-display font-medium flex items-center justify-between group py-2"
                >
                  <span className={activeSlideId === section.id ? 'text-apple-blue' : 'text-apple-silver'}>
                    {section.label}
                  </span>
                  <ChevronRight 
                    size={24} 
                    className={`transition-transform duration-300 ${activeSlideId === section.id ? 'translate-x-2 text-apple-blue' : 'opacity-0'}`} 
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
