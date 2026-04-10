"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";
import { Heart, Building2, PartyPopper, Tent, ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: <Heart size={28} />,
    title: "Bodas & Celebraciones",
    description:
      "Menús personalizados para el día más especial de tu vida. Cada detalle culinario diseñado para impresionar.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    features: [
      "Coctel de bienvenida",
      "Banquete de 3 a 7 tiempos",
      "Mesa de postres y pastel",
      "Barra de bebidas premium",
    ],
  },
  {
    icon: <Building2 size={28} />,
    title: "Eventos Corporativos",
    description:
      "Impresiona a clientes y colaboradores con experiencias gastronómicas que reflejan la excelencia de tu empresa.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
    features: [
      "Coffee breaks ejecutivos",
      "Almuerzos de trabajo",
      "Cenas de gala",
      "Branding en presentación",
    ],
  },
  {
    icon: <PartyPopper size={28} />,
    title: "Fiestas Privadas",
    description:
      "Desde cumpleaños íntimos hasta grandes aniversarios. Tú celebras, nosotros nos encargamos de todo.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    features: [
      "Menús temáticos",
      "Estaciones de comida en vivo",
      "Servicio de meseros",
      "Montaje y limpieza incluidos",
    ],
  },
  {
    icon: <Tent size={28} />,
    title: "Festivales & Ferias",
    description:
      "Operaciones a gran escala sin perder calidad. Food trucks, estaciones y servicio masivo para miles de personas.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
    features: [
      "Capacidad para +1000 personas",
      "Múltiples estaciones de comida",
      "Food trucks personalizados",
      "Logística completa del evento",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, tilt, handleMouseMove, handleMouseLeave } = useTilt(8);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
          transition: "transform 0.2s ease-out",
        }}
        className="relative group h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors"
      >
        {/* Always-visible image header */}
        <div className="relative h-44 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-[#0A0A0A]/60 backdrop-blur-sm flex items-center justify-center text-primary">
            {service.icon}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 flex flex-col">
          <h3 className="text-lg font-semibold font-[family-name:var(--font-playfair)] mb-2 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Feature list */}
          <ul className="space-y-2 mb-6">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium group/btn hover:gap-3 transition-all duration-300"
          >
            <span>Cotizar este servicio</span>
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="servicios" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm tracking-widest uppercase mb-4"
          >
            Nuestros Servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-6"
          >
            Para cada <span className="text-primary">ocasión</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
            Adaptamos nuestro servicio a la perfección de tu evento, sin
            importar el tamaño o la complejidad.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
