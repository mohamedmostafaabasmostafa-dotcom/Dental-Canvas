import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, ShieldCheck, Smile } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { useServices } from "@/hooks/use-content";

export default function Home() {
  const { data: services, isLoading } = useServices();

  // Fallback data if API is loading or empty (for visual preview)
  const displayServices = services || [
    { id: 1, title: "Cosmetic Dentistry", description: "Transform your smile with veneers, bonding, and aesthetic treatments designed for you.", icon: "Sparkles", imageUrl: "" },
    { id: 2, title: "Dental Implants", description: "Restore function and confidence with our state-of-the-art dental implant solutions.", icon: "Anchor", imageUrl: "" },
    { id: 3, title: "Teeth Whitening", description: "Brighten your smile safely and effectively with our professional whitening systems.", icon: "Sun", imageUrl: "" },
  ];

  return (
    <div className="min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                ✨ Award Winning Dental Care
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-slate-900">
                Your Smile, <br/>
                <span className="text-gradient">Perfected.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Experience the future of dentistry with 3D imaging, painless treatments, and a team that treats you like family.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-blue-600 hover:scale-105 transition-transform">
                    Book Appointment
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base border-2 hover:bg-slate-50">
                    View Services
                  </Button>
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-4 text-slate-500 text-sm font-medium">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       {/* Smiling faces avatar placeholder */}
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span>2,000+ Happy Patients</span>
                </div>
              </div>
            </motion.div>

            {/* Visual/3D Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Abstract 3D shape Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" />
              
              {/* Main Image */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700 ease-out border-8 border-white">
                {/* Dental professional with patient - unsplash */}
                {/* Descriptive comment for agent: Professional dentist examining patient smile */}
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                  alt="Modern Dental Care" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 bottom-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Certified</p>
                  <p className="font-bold text-slate-900">Top Specialists</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 top-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Smile size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Results</p>
                  <p className="font-bold text-slate-900">100% Guaranteed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Comprehensive Dental Services</h2>
            <p className="text-lg text-slate-600">We use the latest technology to ensure your treatment is precise, comfortable, and effective.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" className="rounded-full">View All Treatments</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to love your smile?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Schedule your consultation today and take the first step towards the confident smile you deserve.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100 hover:scale-105 transition-all text-lg font-bold px-10 h-16 shadow-lg">
                Book Your Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
