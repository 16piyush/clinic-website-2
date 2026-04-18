import { motion } from 'motion/react';
import { Calendar, ChevronRight, Check } from 'lucide-react';

const serviceList = [
  {
    id: 1,
    title: 'Root Canal Treatment (RCT)',
    desc: 'Advanced painless root canal procedures using rotary endodontics to save your natural tooth.',
    features: ['Single sitting RCT available', 'Microscopic precision', 'Digital apex locators'],
    icon: '🦷'
  },
  {
    id: 2,
    title: 'Dental Implants',
    desc: 'Restore your smile and function with high-durability titanium implants that look and feel real.',
    features: ['Fixed replacement', 'Lifetime warranty', 'Bone grafting available'],
    icon: '🏗️'
  },
  {
    id: 3,
    title: 'Cosmetic Dentistry',
    desc: 'Enhance your aesthetic appeal with smile designing, veneers, and teeth whitening.',
    features: ['Laminates & Veneers', 'Zoom Teeth Whitening', 'Gum Contouring'],
    icon: '✨'
  },
  {
    id: 4,
    title: 'Orthodontics (Braces)',
    desc: 'Align your teeth for a perfect bite and beautiful smile using modern aligners or traditional braces.',
    features: ['Invisible Aligners', 'Ceramic Braces', 'Clear Aligners'],
    icon: '📏'
  },
  {
    id: 5,
    title: 'Child Dentistry (Pedodontics)',
    desc: 'Specialized gentle care for children, focusing on prevention and early intervention.',
    features: ['Fluoride application', 'Pit & Fissure sealants', 'Behavior management'],
    icon: '👶'
  },
  {
    id: 6,
    title: 'Oral & Maxillofacial Surgery',
    desc: 'Expert surgical management of wisdom teeth, fractures, and oral pathologies.',
    features: ['Wisdom tooth extraction', 'Oral biopsy', 'Jaw realignment'],
    icon: '🏥'
  }
];

export default function Services() {
  const appointmentUrl = "https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20query%20about%20";

  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-24 rounded-b-[60px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
           <img 
            src="https://picsum.photos/seed/dental-tech/1000/1000" 
            alt="Service BG" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">World-Class Dental <span className="text-brand-400">Services.</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">Comprehensive care, from routine checkups to complex aesthetic transformations.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((s, i) => (
              <motion.div 
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[40px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-brand-200 transition-all duration-500 flex flex-col"
              >
                <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-4xl mb-8 group-hover:bg-brand-600 transition-colors">
                  <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                  {s.desc}
                </p>
                
                <div className="space-y-3 mb-10">
                  {s.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href={`${appointmentUrl}${encodeURIComponent(s.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-100 text-slate-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-600 hover:text-white transition-all group/btn"
                >
                  Book Service
                  <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Banner */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="bg-brand-50 p-12 rounded-[50px] flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display leading-tight">Can't find what you're looking for?</h2>
            <p className="text-lg text-slate-600 mb-8">Dr. Priyadarshni offers many more specialized treatments. Join us for a consultation to discuss your specific dental needs.</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-brand-600 font-bold">
                <Calendar size={20} />
                Open Mon - Sat
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-300"></div>
              <div className="text-slate-500 font-medium">9:00 AM - 8:00 PM</div>
            </div>
          </div>
          <a
            href="https://wa.me/919876543210?text=I%20need%20a%20consultation%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-xl hover:shadow-brand-300 transition-all shadow-md"
          >
            Consultation Booking
          </a>
        </div>
      </section>
    </div>
  );
}
