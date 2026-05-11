import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, RotateCcw, Award } from 'lucide-react';

const QUESTIONS = [
  {
    question: "Em que ano foi lançado o primeiro MacBook Pro?",
    options: ["2004", "2006", "2008", "2010"],
    answer: 1
  },
  {
    question: "Qual o nome da arquitetura de chips própria da Apple lançada em 2020?",
    options: ["Apple Power", "Apple Silicon", "Mac Fusion", "Global Core"],
    answer: 1
  },
  {
    question: "Qual o brilho máximo (peak) da tela Liquid Retina XDR nos modelos atuais?",
    options: ["500 nits", "1000 nits", "1600 nits", "2500 nits"],
    answer: 2
  },
  {
    question: "Qual conector de carregamento magnético retornou nos modelos de 2021?",
    options: ["USB-C", "MagSafe", "Thunderbolt", "FireWire"],
    answer: 1
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === QUESTIONS[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <section id="quiz" className="py-24 md:py-32 bg-zinc-950 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Teste seu Conhecimento</h2>
          <p className="text-apple-silver/60">Quão bem você conhece o MacBook Pro?</p>
        </div>

        <div className="glass p-8 md:p-12 rounded-[40px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col h-full"
              >
                <div className="mb-8 flex justify-between items-center">
                  <span className="text-apple-blue font-mono text-sm">QUESTÃO {currentQuestion + 1} DE {QUESTIONS.length}</span>
                  <div className="flex gap-1">
                    {QUESTIONS.map((_, i) => (
                      <div key={i} className={`h-1 w-6 rounded-full transition-colors ${i <= currentQuestion ? 'bg-apple-blue' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold mb-10 leading-tight">
                  {QUESTIONS[currentQuestion].question}
                </h3>

                <div className="grid grid-cols-1 gap-4 mb-10">
                  {QUESTIONS[currentQuestion].options.map((opt, idx) => {
                    let btnClass = "p-5 rounded-2xl border border-white/5 bg-white/5 text-left transition-all duration-300 hover:bg-white/10";
                    if (isAnswered) {
                      if (idx === QUESTIONS[currentQuestion].answer) {
                        btnClass = "p-5 rounded-2xl border border-green-500/50 bg-green-500/10 text-left text-green-400";
                      } else if (idx === selectedOption) {
                        btnClass = "p-5 rounded-2xl border border-red-500/50 bg-red-500/10 text-left text-red-400";
                      } else {
                        btnClass = "p-5 rounded-2xl border border-white/5 bg-white/5 text-left opacity-30";
                      }
                    }

                    return (
                      <motion.button
                        key={idx}
                        whileHover={!isAnswered ? { scale: 1.02 } : {}}
                        whileTap={!isAnswered ? { scale: 0.98 } : {}}
                        onClick={() => handleOptionClick(idx)}
                        className={btnClass}
                      >
                        <span className="font-medium">{opt}</span>
                      </motion.button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={nextQuestion}
                    className="w-full py-4 bg-apple-blue text-white rounded-2xl font-bold flex items-center justify-center gap-2"
                  >
                    Próxima Questão
                  </motion.button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="mb-8 flex justify-center">
                   <div className="w-24 h-24 bg-apple-blue/20 rounded-full flex items-center justify-center text-apple-blue">
                      <Award size={64} />
                   </div>
                </div>
                <h3 className="text-4xl font-display font-bold mb-4">Fim do Quiz!</h3>
                <p className="text-xl text-apple-silver/60 mb-8">
                  Você acertou <span className="text-apple-blue font-bold">{score}</span> de {QUESTIONS.length} perguntas.
                </p>
                <button
                  onClick={restartQuiz}
                  className="px-8 py-4 glass rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-white/10 transition-colors"
                >
                  <RotateCcw size={20} /> Refazer Quiz
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
