import { motion } from "framer-motion";
import { useServices } from "@/hooks/use-content";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ServicesPage() {
  const { data: services, isLoading } = useServices();

  const fallbackServices = [
    { id: 1, title: "General Dentistry", description: "Comprehensive exams, cleanings, and preventative care to keep your smile healthy.", icon: "Shield", imageUrl: "" },
    { id: 2, title: "Cosmetic Dentistry", description: "Veneers, bonding, and aesthetic contouring for a perfect smile.", icon: "Sparkles", imageUrl: "" },
    { id: 3, title: "Orthodontics", description: "Invisalign and clear aligners to straighten teeth discreetly.", icon: "AlignJustify", imageUrl: "" },
    { id: 4, title: "Dental Implants", description: "Permanent, natural-looking replacements for missing teeth.", icon: "Anchor", imageUrl: "" },
    { id: 5, title: "Emergency Care", description: "Immediate attention for toothaches, accidents, and urgent dental needs.", icon: "Siren", imageUrl: "" },
    { id: 6, title: "Pediatric Dentistry", description: "Gentle, fun, and specialized care for our youngest patients.", icon: "Baby", imageUrl: "" },
  ];

  const displayList = services?.length ? services : fallbackServices;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            World-Class <span className="text-primary">Dental Treatments</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We combine art and science to provide you with the highest quality dental care available.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-80 bg-slate-100 rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayList.map((service, idx) => (
              <ServiceCard key={service.id} service={service as any} index={idx} />
            ))}
          </div>
        )}

        <div className="mt-24 bg-blue-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 border border-blue-100">
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-900">Unsure what you need?</h3>
            <p className="text-slate-600 text-lg">
              Book a free consultation with Dr. Smith. We'll assess your dental health and create a personalized treatment plan just for you.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8">Schedule Consultation</Button>
            </Link>
          </div>
          <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-lg rotate-3 border-4 border-white">
            {/* Consultation image */}
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
              alt="Consultation" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
