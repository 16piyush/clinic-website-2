import { motion } from 'motion/react';
import { Target, Heart, Zap, CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Target className="text-brand-500" />, title: 'Mission', desc: 'To provide high-quality, ethical dental care using cutting-edge technology.' },
    { icon: <Heart className="text-brand-500" />, title: 'Vision', desc: 'ToBecoming the premier destination for holistic and cosmetic dental wellness.' },
    { icon: <Zap className="text-brand-500" />, title: 'Philosophy', desc: 'Preventive care is better than cure. We focus on long-term oral health.' },
  ];

  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Expertise with a Compassionate Heart.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">Meet Dr. Priyadarshni and her team of dedicated professionals committed to your dental wellness.</p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/doctor-profile/800/1000" 
                  alt="Dr. Priyadarshni" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold mb-1">15+</p>
                <p className="text-sm font-medium opacity-80">Years in Dental Care</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">The Surgeon Behind the Smile</h2>
                <h3 className="text-4xl font-bold text-slate-900 mb-6 underline decoration-brand-200 underline-offset-8">Dr. Priyadarshni MDS</h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  Dr. Priyadarshni is a highly acclaimed Dental Surgeon with specializing in Endodontics and Aesthetic Dentistry. With over 15 years of experience, she has transformed more than 10,000 smiles through her expertise and artistic vision.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Her approach combines advanced clinical diagnostics with a deep understanding of patient psychology, ensuring that every visit is as comfortable as it is effective.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['MDS (Endodontics)', 'Cosmetic Expert', 'Member of IDA', 'Implantology Certified'].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 size={20} className="text-brand-500" />
                    <span className="font-bold text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-900 text-white rounded-[60px] mx-4 md:mx-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500 blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500 blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                  {v.icon}
                </div>
                <h4 className="text-2xl font-bold">{v.title}</h4>
                <p className="text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Clinic Technology & Amenities</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We invest in state-of-the-art equipment to provide faster, safer, and painless dental treatments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Digital X-Ray', icon: '📡' },
              { name: 'Intraoral Camera', icon: '📸' },
              { name: 'Laser Dentistry', icon: '🔦' },
              { name: '3D Scanning', icon: '🧬' },
              { name: 'Painless Injections', icon: '💉' },
              { name: 'Modern OP Units', icon: '🛋️' },
              { name: 'Auto-Claving', icon: '🧼' },
              { name: 'TV & Entertainment', icon: '📺' },
            ].map((tech, i) => (
              <div key={i} className="p-8 text-center rounded-3xl bg-white shadow-sm border border-slate-100 hover:border-brand-300 transition-colors">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <p className="font-bold text-slate-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
