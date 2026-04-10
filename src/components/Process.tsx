"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageSquare, ChefHat, Flame, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <MessageSquare size={28} />,
    title: "Consulta Inicial",
    description:
      "Nos reunimos contigo para entender tu visión, el tipo de evento, número de invitados y preferencias culinarias.",
  },
  {
    number: "02",
    icon: <ChefHat size={28} />,
    title: "Diseño del Menú",
    description:
      "Nuestros chefs crean una propuesta personalizada con degustación incluida para que apruebes cada platillo.",
  },
  {
    number: "03",
    icon: <Flame size={28} />,
    title: "Preparación",
    description:
      "Seleccionamos ingredientes premium y preparamos todo con los más altos estándares de calidad e higiene.",
  },
  {
    number: "04",
    icon: <Truck size={28} />,
    title: "Servicio en tu Evento",
    description:
      "Nuestro equipo llega, monta, sirve y se encarga de todo para que tú solo disfrutes de tu celebración.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isInView } = useScrollReveal();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="proceso" className="relative py-32 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm tracking-widest uppercase mb-4"
          >
            Cómo Funciona
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-6"
          >
            Del sueño al <span className="text-primary">plato</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
            Un proceso simple y transparente para que tu evento sea perfecto.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-accent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: 0.1,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex items-center gap-8 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div
                  className={`flex-1 ml-20 md:ml-0 ${
                    i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors group">
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        i % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold font-[family-name:var(--font-playfair)] group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10 w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center"
                >
                  <span className="text-primary font-bold text-lg font-[family-name:var(--font-playfair)]">
                    {step.number}
                  </span>
                </motion.div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
