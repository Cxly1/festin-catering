"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Novia — Boda en Jardín",
    avatar: "MG",
    rating: 5,
    text: "FESTÍN superó todas nuestras expectativas. La comida fue exquisita y el servicio impecable. Nuestros invitados no dejaron de elogiar cada platillo. Sin duda, la mejor decisión para nuestra boda.",
  },
  {
    name: "Carlos Mendoza",
    role: "Director — Evento Corporativo",
    avatar: "CM",
    rating: 5,
    text: "Contratamos a FESTÍN para nuestra gala anual de 500 personas y el resultado fue extraordinario. Profesionalismo de primer nivel, puntualidad perfecta y una calidad gastronómica que dejó a todos impresionados.",
  },
  {
    name: "Ana Rodríguez",
    role: "Organizadora — Fiesta de XV años",
    avatar: "AR",
    rating: 5,
    text: "Desde la primera consulta hasta el último platillo servido, todo fue perfecto. El equipo de FESTÍN es increíblemente atento y flexible. La comida fue el highlight de la fiesta.",
  },
  {
    name: "Roberto Salazar",
    role: "CEO — Lanzamiento de Producto",
    avatar: "RS",
    rating: 5,
    text: "Necesitábamos algo único y sofisticado para nuestro lanzamiento. FESTÍN creó un menú de degustación que complementó perfectamente nuestra marca. Servicio excepcional de principio a fin.",
  },
  {
    name: "Laura Castillo",
    role: "Anfitriona — Reunión Familiar",
    avatar: "LC",
    rating: 5,
    text: "Lo que más me encantó fue que pude disfrutar de mi propia fiesta sin preocuparme por nada. FESTÍN se encargó de todo: montaje, servicio y hasta la limpieza. La comida estaba divina.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-primary text-primary" : "text-border"}
        />
      ))}
    </div>
  );
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.96,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.96,
    filter: "blur(4px)",
  }),
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const { ref: headerRef, isInView } = useScrollReveal();

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section id="testimonios" className="relative py-32 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm tracking-widest uppercase mb-4"
          >
            Testimonios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-6"
          >
            Lo que dicen{" "}
            <span className="text-primary">nuestros clientes</span>
          </motion.h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-16 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-border bg-surface flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary hover:bg-primary/5 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-16 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-border bg-surface flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary hover:bg-primary/5 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>

          {/* Single card slider */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                  opacity: { duration: 0.4 },
                  filter: { duration: 0.5 },
                }}
                className="bg-card border border-primary/10 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(212,168,83,0.04)]"
              >
                {/* Quote icon */}
                <div className="text-primary/15 text-7xl md:text-8xl font-serif leading-none mb-2 select-none">
                  &ldquo;
                </div>

                {/* Testimonial text */}
                <p className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                  {testimonials[current].text}
                </p>

                {/* Divider */}
                <div className="w-16 h-[2px] bg-primary/30 mb-8" />

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-white flex-shrink-0 shadow-lg shadow-primary/20">
                    {testimonials[current].avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-lg">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <StarRating rating={testimonials[current].rating} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-text-secondary"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
