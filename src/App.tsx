/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import Hardware from './components/Hardware';
import Performance from './components/Performance';
import OS from './components/OS';
import ProsCons from './components/ProsCons';
import Trivia from './components/Trivia';
import Quiz from './components/Quiz';
import Conclusion from './components/Conclusion';
import References from './components/References';

const SLIDES = [
  { id: 'home', component: Hero },
  { id: 'intro', component: Introduction },
  { id: 'evolution', component: Timeline },
  { id: 'hardware', component: Hardware },
  { id: 'performance', component: Performance },
  { id: 'macos', component: OS },
  { id: 'pros-cons', component: ProsCons },
  { id: 'trivia', component: Trivia },
  { id: 'quiz', component: Quiz },
  { id: 'conclusion', component: Conclusion },
  { id: 'references', component: References },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES.length) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < SLIDES.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || (e.key === ' ' && e.target === document.body)) {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const ActiveComponent = SLIDES[currentSlide].component;

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="bg-apple-black h-screen w-screen text-apple-silver selection:bg-apple-blue/30 overflow-hidden relative">
      {/* Dynamic Navigation Overlay */}
      <Navigation onNavigate={goToSlide} activeSlideId={SLIDES[currentSlide].id} />
      
      {/* Slide Container */}
      <main className="relative h-full w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="absolute inset-0 h-full w-full overflow-y-auto"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Slide Controls Overlay */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
        <div className="glass px-4 py-2 rounded-full text-xs font-mono text-apple-silver/60">
          <span className="text-white font-bold">{currentSlide + 1}</span> / {SLIDES.length}
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-3 rounded-full glass transition-all ${
              currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-white/10 active:scale-95'
            }`}
            title="Slide Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === SLIDES.length - 1}
            className={`p-3 rounded-full glass transition-all ${
              currentSlide === SLIDES.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-white/10 active:scale-95'
            }`}
            title="Próximo Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
