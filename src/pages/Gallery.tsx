import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2 } from 'lucide-react';

const galleryItems = [
  { id: 1, category: 'Clinic', title: 'Modern Reception', img: 'https://picsum.photos/seed/dental-recep/800/600' },
  { id: 2, category: 'Treatments', title: 'Digital X-Ray Unit', img: 'https://picsum.photos/seed/dental-xray/800/600' },
  { id: 3, category: 'Clinic', title: 'Consultation Room', img: 'https://picsum.photos/seed/dental-consult/800/600' },
  { id: 4, category: 'Treatments', title: 'Painless RCT Setup', img: 'https://picsum.photos/seed/dental-rct/800/600' },
  { id: 5, category: 'Events', title: 'Patient Wellness Program', img: 'https://picsum.photos/seed/dental-event/800/600' },
  { id: 6, category: 'Clinic', title: 'Sterilization Room', img: 'https://picsum.photos/seed/dental-sterile/800/600' },
  { id: 7, category: 'Treatments', title: 'Cosmetic Setup', img: 'https://picsum.photos/seed/dental-cosmetic/800/600' },
  { id: 8, category: 'Clinic', title: 'Kids Play Zone', img: 'https://picsum.photos/seed/dental-kids/800/600' },
];

const categories = ['All', 'Clinic', 'Treatments', 'Events'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-display font-bold text-slate-900 mb-2">Our Gallery.</h1>
              <p className="text-lg text-slate-500">A glimpse into our world-class facilities and specialized care.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    filter === cat ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-brand-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 cursor-pointer"
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-brand-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6 text-center`}>
                     <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Maximize2 size={24} />
                     </div>
                     <h3 className="text-lg font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
                     <p className="text-xs font-medium uppercase tracking-widest opacity-80 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="bg-slate-900 rounded-[50px] p-12 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 flex justify-around items-center grayscale pointer-events-none">
             {[1,2,3,4,5].map(i => (
               <img key={i} src={`https://picsum.photos/seed/insta${i}/200/200`} className="w-40 h-40 rounded-3xl" alt="social" referrerPolicy="no-referrer" />
             ))}
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
             <div>
                <h2 className="text-white text-3xl font-bold font-display mb-2">Follow our journey on Instagram</h2>
                <p className="text-slate-400 text-lg">Daily smile tips, clinic updates, and more.</p>
             </div>
             <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-brand-50 transition-colors"
             >
               View Instagram
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
