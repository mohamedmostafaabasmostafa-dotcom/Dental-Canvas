import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      serviceInterest: "general"
    }
  });

  const onSubmit = (data: InsertInquiry) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12">
              We're here to help. Schedule an appointment or ask a question using the form.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Visit Us</h3>
                  <p className="text-slate-600">123 Medical Plaza, Suite 400<br/>San Francisco, CA 94103</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Call Us</h3>
                  <p className="text-slate-600">(555) 123-4567</p>
                  <p className="text-sm text-slate-500 mt-1">Mon-Fri: 8am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Email Us</h3>
                  <p className="text-slate-600">hello@dentistpro.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.063683526693!2d-122.4194154846819!3d37.77492957975919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1530635201124" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0 }} 
                allowFullScreen 
                title="Office Location"
              />
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100"
          >
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Send us a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} className="rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} className="rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="serviceInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value || "general"}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl bg-slate-50 border-slate-200 focus:bg-white h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Checkup</SelectItem>
                          <SelectItem value="cleaning">Cleaning</SelectItem>
                          <SelectItem value="whitening">Teeth Whitening</SelectItem>
                          <SelectItem value="implants">Implants</SelectItem>
                          <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                          <SelectItem value="ortho">Orthodontics</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your needs or preferred appointment times..." className="min-h-[120px] rounded-xl bg-slate-50 border-slate-200 focus:bg-white resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full rounded-xl h-12 text-base font-semibold shadow-lg shadow-primary/20"
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
