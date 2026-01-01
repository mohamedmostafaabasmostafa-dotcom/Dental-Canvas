import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Smile Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass-card rounded-2xl px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              D
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-800">
              Dentist<span className="text-primary">Pro</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer relative ${
                  location === link.href ? "text-primary" : "text-slate-600"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </div>
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="rounded-full px-6 bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Book Online
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-24 left-4 right-4 p-4 glass-card rounded-2xl md:hidden flex flex-col gap-4 shadow-2xl"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                onClick={() => setIsOpen(false)}
                className={`p-3 rounded-lg text-center font-medium ${
                  location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <Link href="/contact">
            <Button className="w-full rounded-full" onClick={() => setIsOpen(false)}>
              Book Appointment
            </Button>
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
