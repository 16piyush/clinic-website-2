import { motion } from 'motion/react';
import { ShieldCheck, Clock, Award, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const appointmentUrl = "https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20book%20an%20appointment%20at%20Dr%20Priyadarshni’s%20Dental%20Clinic";

  const stats = [
    { label: 'Happy Patients', value: '5000+' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Dental Specialists', value: '08+' },
    { label: 'Awards Won', value: '12+' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[90vh] flex items-center pt-20">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[440px]"
            >
              <span className="inline-block bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                Excellence in Dental Care
              </span>
              <h1 className="text-[52px] font-display font-bold text-brand-900 leading-[1.1] mb-6">
                Modern Care for a Perfect Smile.
              </h1>
              <p className="text-[18px] text-slate-500 mb-8 leading-relaxed">
                Providing advanced dental treatments with a compassionate touch. From routine checkups to aesthetic transformations, your health is our priority.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={appointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-600 text-white px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-brand-700 btn-shadow flex items-center justify-center"
                >
                  Get Started Now
                </a>
                <a 
                  href="https://g.page/r/XXXXXXXX/review" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-600 border-2 border-brand-600 px-7 py-3 rounded-lg text-sm font-semibold transition-all hover:bg-brand-50 flex items-center justify-center"
                >
                  Read Patient Stories
                </a>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[24px] h-[480px] relative visual-shadow flex flex-col overflow-hidden"
            >
              <div 
                className="h-[70%] bg-center bg-cover"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800')" }}
              ></div>
              <div className="p-8 grid grid-cols-2 gap-5 bg-white flex-grow">
                <div className="border-l-[3px] border-brand-600 pl-4">
                  <span className="block text-2xl font-bold text-brand-900">15k+</span>
                  <span className="text-[12px] text-slate-500 uppercase tracking-wider font-semibold">Happy Patients</span>
                </div>
                <div className="border-l-[3px] border-brand-600 pl-4">
                  <span className="block text-2xl font-bold text-brand-900">12+</span>
                  <span className="text-[12px] text-slate-500 uppercase tracking-wider font-semibold">Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800">Advanced Hygiene</h3>
                <p className="text-sm text-slate-500">100% Sterilized instruments & environment</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                <Clock size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800">Prompt Care</h3>
                <p className="text-sm text-slate-500">Zero waiting time with booked appointments</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                <Award size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800">Certified Experts</h3>
                <p className="text-sm text-slate-500">Treatment by highly qualified dental surgeons</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-5xl font-display font-bold text-brand-600 mb-2">{stat.value}</p>
                <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief Services */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-base font-bold text-brand-600 uppercase tracking-widest mb-4">Precision Treatments</h2>
              <p className="text-4xl font-bold text-slate-900 leading-tight">Expert dental solutions tailored for your unique needs.</p>
            </div>
            <Link to="/services" className="text-brand-600 font-bold flex items-center gap-2 hover:gap-3 transition-all mb-2">
              See All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: 'Oral Surgery', desc: 'Expert surgical solutions for complex dental issues.', icon: '🦷' },
               { title: 'Cosmetic Dentistry', desc: 'Transform your smile with veneers and whitening.', icon: '✨' },
               { title: 'Pediatric Care', desc: 'Gentle dental treatments for your little ones.', icon: '🎈' }
             ].map((service, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ y: -10 }}
                 className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
               >
                 <div className="text-4xl mb-6">{service.icon}</div>
                 <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                 <p className="text-slate-500 mb-8 leading-relaxed">{service.desc}</p>
                 <Link to="/services" className="text-sm font-bold text-brand-600 inline-flex items-center gap-1 group">
                   Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </Link>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-brand-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-500 -skew-x-12 translate-x-1/2 opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-2xl mx-auto">Ready to experience a pain-free dental visit?</h2>
          <a
            href={appointmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-600 px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl"
          >
            Request Appointment Now
          </a>
        </div>
      </section>
    </div>
  );
}
