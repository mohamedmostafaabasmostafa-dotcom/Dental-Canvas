import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { type Service } from "@shared/schema";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  // Dynamic icon loading
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Stethoscope;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <IconComponent size={28} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        
        <p className="text-slate-500 leading-relaxed mb-6">
          {service.description}
        </p>
        
        <div className="flex items-center text-primary font-semibold text-sm cursor-pointer group-hover:translate-x-1 transition-transform">
          Learn more <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </motion.div>
  );
}
