"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Eventos Realizados" },
  { value: 50, suffix: "K+", label: "Invitados Servidos" },
  { value: 98, suffix: "%", label: "Clientes Satisfechos" },
  { value: 12, suffix: "", label: "Años de Experiencia" },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-primary">
      {count}
      {suffix}
    </span>
  );
}

export default function CTA() {
  const { ref: headerRef, isInView } = useScrollReveal();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" as `${number}px` });

  const ctaWords = [
    "Hagamos",
    "de",
    "tu",
    "próximo",
    "evento",
    "algo",
    "inolvidable",
  ];

  return (
    <section id="contacto" className="relative py-32 px-6 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 animate-gradient-mesh"
          style={{
            background:
              "linear-gradient(-45deg, #D4A853, #8B2252, #D4A853, #0A0A0A)",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[#0A0A0A]/70" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={statsInView}
              />
              <p className="text-text-secondary text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Text */}
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] leading-tight mb-8">
            {ctaWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block mr-[0.3em] ${
                  word === "inolvidable" ? "text-primary" : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto mb-10"
          >
            Cuéntanos sobre tu evento y recibe una propuesta personalizada en
            menos de 24 horas. Sin compromisos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="mailto:contacto@festin.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-[#0A0A0A] font-semibold text-lg relative overflow-hidden"
            >
              <span className="relative z-10">Cotizar Mi Evento</span>
              <ArrowRight
                size={20}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
              <span className="absolute inset-0 bg-primary-light scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </motion.a>

            <motion.a
              href="https://wa.me/523311441544"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors text-lg"
            >
              WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
