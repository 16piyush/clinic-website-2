import { motion } from 'motion/react';
import { Star, Quote, ExternalLink, MessageSquareText } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient",
    content: "Dr. Priyadarshni is amazing! I was terrified of root canals, but she made the whole process completely painless. Her clinic is so modern and clean.",
    rating: 5,
    date: "2 months ago",
    img: "https://picsum.photos/seed/p1/100/100"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Patient",
    content: "Excellent diagnostic skills. She explained my treatment plan in detail and didn't push for unnecessary procedures. Highly recommended for implants.",
    rating: 5,
    date: "1 month ago",
    img: "https://picsum.photos/seed/p2/100/100"
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Patient",
    content: "The best dental experience I've had. The staff is very courteous and the appointment was on time. My smile has never looked better after the whitening sessions.",
    rating: 5,
    date: "3 weeks ago",
    img: "https://picsum.photos/seed/p3/100/100"
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Patient",
    content: "Highly professional service. The technology they use is impressive. Dr. Priyadarshni is very gentle and thorough in her work.",
    rating: 5,
    date: "5 days ago",
    img: "https://picsum.photos/seed/p4/100/100"
  },
];

export default function Reviews() {
  const googleReviewUrl = "https://g.page/r/XXXXXXXX/review"; // Replace XXXXXXXX with real ID
  const feedbackUrl = "https://wa.me/919876543210?text=I%20want%20to%20share%20my%20feedback%20for%20Dr%20Priyadarshni’s%20Dental%20Clinic";

  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-brand-50 py-24 rounded-b-[60px]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6">Patient Stories.</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">We believe in delivering excellence, one smile at a time. Here is what our patients have to say.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-xl transition-all border border-slate-100 flex items-center gap-3 group"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="w-5" />
                Write a Google Review
                <ExternalLink size={16} className="text-slate-400 group-hover:text-brand-600" />
              </a>
              <a
                href={feedbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-xl transition-all flex items-center gap-3 group"
              >
                <MessageSquareText size={20} />
                Share Feedback
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
             <div className="text-center md:text-left">
                <p className="text-6xl font-display font-black text-slate-900 mb-2">4.9</p>
                <div className="flex text-amber-400 mb-2 justify-center md:justify-start">
                   {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
                </div>
                <p className="text-slate-500 font-bold">Average Patient Rating</p>
             </div>
             <div className="flex-1 w-full max-w-md space-y-3">
                {[
                  { star: 5, perc: 92 },
                  { star: 4, perc: 6 },
                  { star: 3, perc: 2 },
                  { star: 2, perc: 0 },
                  { star: 1, perc: 0 },
                ].map(r => (
                  <div key={r.star} className="flex items-center gap-4">
                     <span className="text-sm font-bold w-12 text-slate-600">{r.star} Star</span>
                     <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${r.perc}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-brand-500"
                        />
                     </div>
                     <span className="text-xs font-bold w-8 text-slate-400">{r.perc}%</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((rev, i) => (
              <motion.div 
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm relative group hover:shadow-xl transition-all h-full flex flex-col"
              >
                <div className="absolute top-10 right-10 text-brand-100 group-hover:text-brand-200 transition-colors">
                  <Quote size={60} fill="currentColor" />
                </div>
                <div className="flex text-amber-400 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-lg text-slate-600 italic leading-relaxed mb-8 flex-grow">
                  "{rev.content}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <img src={rev.img} alt={rev.name} className="w-14 h-14 rounded-full border-2 border-brand-50" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-900">{rev.name}</h4>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">{rev.role} • {rev.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 md:px-6 py-20">
         <div className="bg-slate-900 rounded-[50px] p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img src="https://picsum.photos/seed/smile/1920/1080?blur=5" className="w-full h-full object-cover" alt="bg" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold font-display mb-6">Ready to share your own story?</h2>
              <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">Your feedback helps us grow and provide even better care to the community.</p>
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand-400 transition-all inline-flex items-center gap-2"
              >
                Write a Review
                <ExternalLink size={20} />
              </a>
            </div>
         </div>
      </section>
    </div>
  );
}
