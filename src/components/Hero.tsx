"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const titleWords = ["Llevamos", "el", "sabor", "a", "tu", "evento"];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/4170293/4170293-uhd_2732_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-[#0A0A0A]/70" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]" />

      {/* Animated golden particles (CSS) — deterministic positions */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
        {[
          { l: 5, t: 12, d: 0, dur: 5 }, { l: 15, t: 80, d: 1.2, dur: 6 },
          { l: 25, t: 35, d: 2.5, dur: 7 }, { l: 38, t: 65, d: 0.8, dur: 4.5 },
          { l: 45, t: 20, d: 3.1, dur: 5.5 }, { l: 55, t: 90, d: 1.7, dur: 6.5 },
          { l: 62, t: 45, d: 4.2, dur: 7.5 }, { l: 72, t: 15, d: 0.3, dur: 4.8 },
          { l: 80, t: 70, d: 2.9, dur: 5.2 }, { l: 88, t: 30, d: 4.9, dur: 7.2 },
          { l: 10, t: 55, d: 1.5, dur: 6.2 }, { l: 33, t: 8, d: 3.8, dur: 5.8 },
          { l: 50, t: 50, d: 0.5, dur: 4.2 }, { l: 68, t: 85, d: 2.2, dur: 7.8 },
          { l: 92, t: 60, d: 5.1, dur: 5.3 }, { l: 20, t: 42, d: 3.4, dur: 6.8 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40 animate-float"
            style={{
              left: `${p.l}%`,
              top: `${p.t}%`,
              animationDelay: `${p.d}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm tracking-widest uppercase bg-[#0A0A0A]/40 backdrop-blur-sm">
            Catering Premium
          </span>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-playfair)] leading-[1.1] mb-8">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block mr-[0.3em] drop-shadow-lg ${
                word === "sabor" ? "text-primary" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md"
        >
          Creamos experiencias gastronómicas inolvidables. Desde bodas íntimas
          hasta grandes corporativos, nuestro equipo lleva la cocina de autor
          directamente a tu celebración.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-primary text-[#0A0A0A] font-semibold text-lg relative overflow-hidden group animate-pulse-glow"
          >
            <span className="relative z-10">Solicitar Cotización</span>
            <span className="absolute inset-0 bg-primary-light scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </motion.a>

          <motion.a
            href="#servicios"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border border-white/20 text-foreground hover:border-primary/50 hover:text-primary transition-colors text-lg backdrop-blur-sm"
          >
            Explorar Servicios
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#servicios"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Descubre</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
