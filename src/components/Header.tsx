import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const appointmentUrl = "https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20book%20an%20appointment%20at%20Dr%20Priyadarshni’s%20Dental%20Clinic";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm h-20' : 'bg-white h-20 border-b border-brand-600/10'
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 h-full">
        <nav className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-2 group">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600"><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h20"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 14 4 4 4-4"/></svg>
             <span className="text-lg font-display font-extrabold tracking-tight text-brand-600 uppercase">Dr. Priyadarshni’s</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${
                    isActive ? 'text-brand-600' : 'text-slate-500 hover:text-brand-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 text-white px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-brand-700 transition-all shadow-sm"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-semibold px-2 py-1 ${
                      isActive ? 'text-brand-600 translate-x-1' : 'text-slate-600'
                    } transition-all`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <hr className="border-slate-100 my-2" />
              <div className="flex flex-col gap-4 px-2">
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-3 text-slate-700 font-semibold"
                >
                  <Phone size={20} className="text-brand-500" />
                  +91 98765 43210
                </a>
                <a
                  href={appointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-600 text-white px-6 py-3 rounded-xl text-center font-bold shadow-md"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
