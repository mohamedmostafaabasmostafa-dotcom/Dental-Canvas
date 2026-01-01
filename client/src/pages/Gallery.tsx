import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function GalleryPage() {
  const cases = [
    {
      id: 1,
      title: "Porcelain Veneers",
      description: "Complete smile makeover correcting discoloration and spacing.",
      // Using unsplash placeholders for before/after - usually specific medical images
      before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f72?q=80&w=1000&auto=format&fit=crop", 
      after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Invisalign Treatment",
      description: "12 months of clear aligner therapy for crowding.",
      before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1628104884102-39c5d79905c1?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Teeth Whitening",
      description: "In-office Zoom whitening session results.",
      before: "https://images.unsplash.com/photo-1588776814546-1b8c1dd04019?q=80&w=1000&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Real Patient <span className="text-primary">Results</span>
          </h1>
          <p className="text-xl text-slate-600">
            See the transformative power of modern dentistry. Drag the slider on each image to compare before and after.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <BeforeAfterSlider 
                beforeImage={item.before} 
                afterImage={item.after} 
              />
              <div className="text-center px-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center space-y-8">
          <h2 className="text-3xl font-bold font-display">Want similar results?</h2>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg">
              Start Your Transformation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
