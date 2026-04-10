"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dishes = [
  {
    name: "Carpaccio de Res",
    category: "Entradas",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80",
    description: "Con rúcula, parmesano y reducción balsámica",
  },
  {
    name: "Ceviche Tropical",
    category: "Entradas",
    image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=500&q=80",
    description: "Pescado fresco con mango, cilantro y chile habanero",
  },
  {
    name: "Risotto de Trufa",
    category: "Platos Fuertes",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&q=80",
    description: "Arroz arborio con trufa negra y parmesano aged",
  },
  {
    name: "Filete Wellington",
    category: "Platos Fuertes",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&q=80",
    description: "Res premium en hojaldre con duxelles de hongos",
  },
  {
    name: "Salmón Glaseado",
    category: "Platos Fuertes",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&q=80",
    description: "Con miso, jengibre y vegetales de temporada",
  },
  {
    name: "Tiramisú Artesanal",
    category: "Postres",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80",
    description: "Mascarpone, café espresso y cacao premium",
  },
  {
    name: "Crème Brûlée",
    category: "Postres",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=500&q=80",
    description: "Vainilla de Madagascar con caramelo crocante",
  },
  {
    name: "Cocktail Signature",
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&q=80",
    description: "Mezcal, maracuyá y espuma de hibisco",
  },
];

const marqueeItems = [
  "Carpaccio de Res",
  "Ceviche Tropical",
  "Risotto de Trufa",
  "Filete Wellington",
  "Salmón Glaseado",
  "Tiramisú Artesanal",
  "Crème Brûlée",
  "Cocktail Signature",
  "Tarta de Chocolate",
  "Ensalada Caesar",
];

function DishCard({ dish, index }: { dish: (typeof dishes)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative flex-shrink-0 w-[300px] md:w-[350px] h-[420px] rounded-2xl overflow-hidden snap-start"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${dish.image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent transition-opacity duration-500 group-hover:via-[#0A0A0A]/50" />

      <div className="absolute inset-0 border border-white/5 group-hover:border-primary/40 rounded-2xl transition-all duration-500" />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "inset 0 -80px 60px -40px rgba(212,168,83,0.1)" }} />

      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <span className="text-primary text-xs uppercase tracking-widest mb-2 block">
          {dish.category}
        </span>
        <h3 className="text-xl font-semibold font-[family-name:var(--font-playfair)] mb-2 transition-colors duration-300 group-hover:text-primary-light">
          {dish.name}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {dish.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function MenuShowcase() {
  const { ref: headerRef, isInView } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 370;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  return (
    <section id="menu" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div ref={headerRef} className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm tracking-widest uppercase mb-4"
          >
            Nuestro Menú
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-6"
          >
            Sabores que <span className="text-primary">inspiran</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
            Cada platillo es una obra de arte culinaria, preparado con
            ingredientes de la más alta calidad.
          </motion.p>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-3 mt-8">
          <motion.button
            onClick={() => scroll("left")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            onClick={() => scroll("right")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>

      {/* Scrollable gallery */}
      <div
        ref={scrollRef}
        className="flex gap-6 px-6 pb-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex-shrink-0 w-4 md:w-[calc((100vw-1300px)/2)]" />
        {dishes.map((dish, i) => (
          <DishCard key={dish.name} dish={dish} index={i} />
        ))}
        <div className="flex-shrink-0 w-4 md:w-[calc((100vw-1300px)/2)]" />
      </div>

      {/* Marquee */}
      <div className="mt-20 overflow-hidden border-y border-border py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-8 text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-border hover:text-primary transition-colors duration-300 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
