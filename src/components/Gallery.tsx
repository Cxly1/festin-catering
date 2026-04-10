"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X, Expand } from "lucide-react";

const events = [
  {
    title: "Boda en el Jardín Botánico",
    category: "Bodas",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    size: "tall",
  },
  {
    title: "Gala Corporativa Anual",
    category: "Corporativo",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    size: "normal",
  },
  {
    title: "Festival Gastronómico",
    category: "Festivales",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    size: "normal",
  },
  {
    title: "Celebración de Aniversario",
    category: "Fiestas",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    size: "tall",
  },
  {
    title: "Brunch Ejecutivo",
    category: "Corporativo",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    size: "normal",
  },
  {
    title: "Cena de Gala Benéfica",
    category: "Eventos",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
    size: "tall",
  },
  {
    title: "Coctel de Bienvenida",
    category: "Bodas",
    image: "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?w=800&q=80",
    size: "normal",
  },
  {
    title: "Lanzamiento de Producto",
    category: "Corporativo",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    size: "normal",
  },
  {
    title: "Fiesta de XV Años",
    category: "Fiestas",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    size: "tall",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<(typeof events)[0] | null>(null);
  const { ref: headerRef, isInView } = useScrollReveal();

  return (
    <section id="galeria" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm tracking-widest uppercase mb-4"
          >
            Galería
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-6"
          >
            Momentos que <span className="text-primary">trascienden</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
            Una muestra de los eventos que hemos tenido el privilegio de servir.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: (i % 3) * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelected(event)}
            >
              <div
                className={`relative overflow-hidden ${
                  event.size === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${event.image})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 border border-border group-hover:border-primary/30 rounded-2xl transition-colors duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-primary text-xs uppercase tracking-widest mb-1 block">
                    {event.category}
                  </span>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-playfair)]">
                    {event.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0A0A0A]/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Expand size={16} className="text-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/90 backdrop-blur-xl p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl max-h-[85vh] w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-[70vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${selected.image})` }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0A0A0A] to-transparent">
                <span className="text-primary text-sm uppercase tracking-widest mb-2 block">
                  {selected.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)]">
                  {selected.title}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0A0A0A]/50 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
