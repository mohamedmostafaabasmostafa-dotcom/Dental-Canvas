import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                D
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Dentist<span className="text-primary">Pro</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Bringing smiles to life with modern, gentle, and professional dental care. Your comfort is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-primary transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-primary transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-primary transition-colors text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Before & After</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><span className="hover:text-primary transition-colors cursor-pointer">Cosmetic Dentistry</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Dental Implants</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Teeth Whitening</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">General Checkups</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>123 Medical Plaza, Suite 400<br/>San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>hello@dentistpro.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} DentistPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
