import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Automating Infrastructure...",
  "Deploying Microservices...",
  "Scaling Cloud Systems...",
  "Securing Production Environments..."
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-slate-950">

      {/* Animated Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-20 left-20"
      />

      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-20 right-20"
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-white mb-4 z-10"
      >
        LAKSHMINARASIMHA P K
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl text-slate-300 mb-4 z-10"
      >
        DevOps Engineer | Cloud & Automation Specialist
      </motion.p>

      {/* Terminal Typing Effect */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-green-400 font-mono text-lg z-10"
      >
        &gt; {texts[index]}
      </motion.div>

      

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 text-slate-400 text-sm"
      >
        ↓ Scroll
      </motion.div>

    </section>
  );
}