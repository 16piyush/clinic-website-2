import { FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, Globe } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("In a real app, this would send an email or store the query. For now, please use the WhatsApp button!");
  };

  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Let's Connect.</h1>
            <p className="text-xl text-slate-500 leading-relaxed">Have a question about a treatment? Or want to book a visit? We are here to help you.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 h-full">
                <h2 className="text-2xl font-bold text-slate-900 mb-10">Clinic Info</h2>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone Number</p>
                      <a href="tel:+919876543210" className="text-lg font-bold text-slate-700 hover:text-brand-600 transition-colors">+91 98765 43210</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                      <a href="mailto:info@drpriyadarshni.com" className="text-lg font-bold text-slate-700 hover:text-brand-600 transition-colors">info@drpriyadarshni.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Our Location</p>
                      <p className="text-lg font-bold text-slate-700">123 Dental Street, Suite 456, Medical Hub, City - 123456</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Working Hours</p>
                      <p className="text-lg font-bold text-slate-700">Mon - Sat: 9 AM - 8 PM</p>
                      <p className="text-sm text-slate-500">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-slate-200">
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Follow us</p>
                   <div className="flex gap-4">
                     {['FB', 'IG', 'TW', 'LI'].map(social => (
                       <div key={social} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all cursor-pointer">
                         {social}
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-600 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-500 outline-none transition-all font-medium" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-600 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 00000 00000" 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-500 outline-none transition-all font-medium" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 ml-1">Topic / Subject</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-500 outline-none transition-all font-medium appearance-none">
                      <option>General Query</option>
                      <option>Appointment Inquiry</option>
                      <option>Treatment Details</option>
                      <option>Second Opinion</option>
                      <option>Careers</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 ml-1">Your Message</label>
                    <textarea 
                      rows={5} 
                      placeholder="How can we help you today?" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-500 outline-none transition-all font-medium resize-none" 
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-brand-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-700 shadow-lg hover:shadow-brand-200 transition-all flex items-center justify-center gap-3"
                  >
                    <Send size={20} />
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="rounded-[60px] overflow-hidden relative shadow-inner group">
          <div className="h-[500px] w-full bg-slate-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Globe size={40} className="text-brand-600" />
              </div>
              <p className="text-2xl font-display font-bold text-slate-400">Interactive Map Integration</p>
              <p className="text-slate-400 font-medium">Coming Soon (Google Maps API required)</p>
            </div>
          </div>
          {/* Overlay to mimic a placeholder */}
          <div className="absolute inset-0 bg-brand-900/5 mix-blend-multiply pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
}
