"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Servicios: [
    { label: "Bodas", href: "#servicios" },
    { label: "Corporativos", href: "#servicios" },
    { label: "Fiestas Privadas", href: "#servicios" },
    { label: "Festivales", href: "#servicios" },
  ],
  Empresa: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Nuestro Equipo", href: "#" },
    { label: "Galería", href: "#galeria" },
    { label: "Testimonios", href: "#testimonios" },
  ],
  Legal: [
    { label: "Términos de Servicio", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Política de Cancelación", href: "#" },
  ],
};

const socials = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    href: "#",
    label: "Instagram",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    href: "#",
    label: "Facebook",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    href: "#",
    label: "Twitter",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#inicio"
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-primary">
                FESTÍN
              </span>
            </motion.a>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              Creamos experiencias gastronómicas inolvidables para cada tipo de
              evento. Más de 12 años llevando sabor y elegancia a tus
              celebraciones.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contacto@festin.com"
                className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                contacto@festin.com
              </a>
              <a
                href="tel:+523311441544"
                className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors text-sm"
              >
                <Phone size={16} />
                +52 33 1144 1544
              </a>
              <p className="flex items-center gap-3 text-text-secondary text-sm">
                <MapPin size={16} />
                Ciudad de México, México
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} FESTÍN Catering & Eventos. Todos los
            derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
